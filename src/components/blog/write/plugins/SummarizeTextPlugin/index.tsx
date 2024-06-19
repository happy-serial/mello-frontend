import { summarizeText } from "@/api";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  LexicalEditor,
  ParagraphNode,
} from "lexical";

export const parseStream = async (
  reader: ReadableStreamDefaultReader<Uint8Array>,
  editor: LexicalEditor
) => {
  const decoder = new TextDecoder();
  let accumulatedText = "";
  let outputText = "";
  let paragraphNode: ParagraphNode | null = null;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const decodedValue = decoder.decode(value, { stream: true });
    accumulatedText += decodedValue;

    let newlineIndex;
    while ((newlineIndex = accumulatedText.indexOf("\n")) !== -1) {
      const line = accumulatedText.substring(0, newlineIndex).trim();
      accumulatedText = accumulatedText.substring(newlineIndex + 1);

      if (line) {
        try {
          const startIndex = line.indexOf("{");
          if (startIndex !== -1) {
            const obj = JSON.parse(line.substring(startIndex));

            for (const char of obj.data) {
              // obj.data의 각 문자 처리
              outputText += char;
              console.log(outputText);
              if (char === "\n") {
                outputText = "\n";
              }
              editor.update(() => {
                const root = $getRoot();
                if (char === "\n" || paragraphNode === null) {
                  paragraphNode = $createParagraphNode();
                }
                const textNode = $createTextNode(outputText);
                paragraphNode.append(textNode);
                $convertFromMarkdownString(
                  outputText,
                  TRANSFORMERS,
                  paragraphNode
                );

                root.append(paragraphNode);
              });
            }
          }
        } catch (parseError) {
          console.error("Parsing error:", parseError);
        }
      }
    }
  }

  if (accumulatedText.trim()) {
    try {
      const startIndex = accumulatedText.indexOf("{");
      if (startIndex !== -1) {
        const obj = JSON.parse(accumulatedText.substring(startIndex));
        console.log(obj);
      }
    } catch (parseError) {
      console.error("Parsing error in remaining data:", parseError);
    }
  }
};

export default function SummarizeTextPlugin({
  getParsedData,
}: {
  getParsedData: () => string;
}): JSX.Element {
  const [editor] = useLexicalComposerContext();

  const insertText = async () => {
    console.log(getParsedData());
    const reader = await summarizeText(getParsedData());
    if (reader) {
      parseStream(reader, editor);
    }
  };

  const summarizeTextToMarkdown = async (text: string) => {
    console.log(text);
    const reader = await summarizeText(text);
    if (reader) {
      parseStream(reader, editor);
    }
  };

  const getDraggedText = async () => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        const text = selection.getTextContent();
        const point = selection.getStartEndPoints();

        if (point) {
          const rangeSelection = $createRangeSelection();
          rangeSelection.anchor = point[0];
          rangeSelection.focus = point[1];
          rangeSelection.removeText();
        }

        summarizeTextToMarkdown(text);
      }
    });
  };

  return <></>;
}
