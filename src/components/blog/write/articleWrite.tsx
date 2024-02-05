"use client";
/**
 * TODO: 커서 위아래로 이동 시 이전 포커스를 기준으로 이동해야함..
 * TODO: shift + 커서 움직이는 것, 마우스로 전체 드래그가 가능해야 함.
 *  */

import { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

interface ArticleWriteAreaProps {}

interface ContentBlockProps {
  id: string;
  blocks: { id: string }[];
  defaultHtml?: string;
  setRef: (id: string, ref: React.RefObject<HTMLInputElement>) => void;
  onEnter: (id: string, content: string) => void;
  onDelete: (id: string) => void;
  onFocusPrev: (id: string, cursor?: number) => void;
  onFocusNext: (id: string, cursor?: number) => void;
  onFocusPrevLeft: (id: string) => void;
}

const parseContent = (content: string) => {};

const ContentBlock = ({
  id,
  blocks,
  defaultHtml,
  setRef,
  onEnter,
  onDelete,
  onFocusNext,
  onFocusPrev,
  onFocusPrevLeft,
}: ContentBlockProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [html, setHtml] = useState(defaultHtml || "");

  useEffect(() => {
    setRef(id, ref);
    if (ref.current) {
      ref.current.focus();
    }
  }, [id, setRef]);

  const handleChange = (e: any) => {
    setHtml(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const selection = document.getSelection();
    const currentPos = selection?.anchorOffset;

    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        const textContent = ref.current?.innerText;
        if (textContent && currentPos !== undefined) {
          const beforeText = textContent.slice(0, currentPos);
          const afterText = textContent.slice(currentPos);
          console.log(afterText);
          setHtml(beforeText);
          onEnter(id, afterText);
        } else {
          onEnter(id, "");
        }
        break;

      case "Backspace":
        if (ref.current?.innerText === "") {
          e.preventDefault();
          onDelete(id);
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        onFocusPrev(id, currentPos);
        break;

      case "ArrowDown":
        e.preventDefault();
        console.log(currentPos);
        onFocusNext(id, currentPos);
        break;

      case "ArrowLeft":
        if (currentPos === 0) {
          e.preventDefault();
          onFocusPrevLeft(id);
        }
        break;

      case "ArrowRight":
        const atEnd = currentPos === ref.current?.innerText.length;
        if (atEnd) {
          e.preventDefault();
          onFocusNext(id);
        }
        break;

      default:
        if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
          console.log("copy");
          navigator.clipboard.writeText("asdfasdf");
        }
        break;
    }
  };

  return (
    <ContentEditable
      innerRef={ref}
      tagName="div"
      html={html}
      disabled={false}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      style={{
        height: "30px",
        width: "900px",
        fontSize: "1.2rem",
        outline: "none",
      }}
    />
  );
};

export const ArticleWriteArea = () => {
  const [blocks, setBlocks] = useState([{ id: crypto.randomUUID(), html: "" }]);
  const blockRefs = useRef<Record<string, React.RefObject<HTMLElement>>>({});

  useEffect(() => {
    console.log(blocks.length);
  }, [blocks.length]);

  const focusBlock = (targetId: string, cursor?: number) => {
    const targetRef = blockRefs.current[targetId];
    if (targetRef && targetRef.current) {
      targetRef.current.focus();

      if (cursor && targetRef.current.innerText.length >= cursor) {
        const range = document.createRange();
        const sel = window.getSelection();
        if (sel) {
          range.setStart(targetRef.current.childNodes[0], cursor);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  };

  const onFocusNext = (id: string, cursor?: number) => {
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === id);
      if (index >= 0 && index < prevBlocks.length - 1) {
        cursor
          ? focusBlock(prevBlocks[index + 1].id, cursor)
          : focusBlock(prevBlocks[index + 1].id);
      }
      return prevBlocks;
    });
  };

  const onFocusPrev = (id: string, cursor?: number) => {
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === id);
      if (index > 0) {
        cursor
          ? focusBlock(prevBlocks[index - 1].id, cursor)
          : focusBlock(prevBlocks[index - 1].id);
      }
      return prevBlocks;
    });
  };

  const onFocusPrevLeft = (id: string) => {
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === id);
      if (index > 0) {
        const previousBlockId = prevBlocks[index - 1].id;
        const targetRef = blockRefs.current[previousBlockId];
        if (targetRef && targetRef.current) {
          const elem = targetRef.current;
          if ("focus" in elem) {
            elem.focus();
          }
          const range = document.createRange();
          const sel = window.getSelection();
          if (sel) {
            range.selectNodeContents(elem);
            range.collapse(false); // false로 설정하여 마지막으로 이동
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      }
      return prevBlocks;
    });
  };

  const setRef = (id: string, ref: React.RefObject<HTMLElement>) => {
    blockRefs.current[id] = ref;
  };

  const addBlock = (id: string, content: string) => {
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === id);
      const newBlock = { id: crypto.randomUUID(), html: content };
      const newBlocks = [
        ...prevBlocks.slice(0, index + 1),
        newBlock,
        ...prevBlocks.slice(index + 1),
      ];
      return newBlocks;
    });
  };

  const deleteBlock = (id: string) => {
    if (blocks.length > 1) {
      const newBlocks = blocks.filter((block) => block.id !== id);
      const index = blocks.findIndex((block) => block.id === id);
      const previousBlockId = index > 0 ? blocks[index - 1].id : null;
      setBlocks(newBlocks);

      if (previousBlockId) {
        setTimeout(() => {
          const prevBlockRef = blockRefs.current[previousBlockId];
          if (prevBlockRef && prevBlockRef.current) {
            prevBlockRef.current.focus();
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(prevBlockRef.current);
            range.collapse(false);
            sel?.removeAllRanges();
            sel?.addRange(range);
          }
        }, 0);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {blocks.map((block) => (
        <ContentBlock
          key={block.id}
          id={block.id}
          defaultHtml={block.html}
          blocks={blocks}
          setRef={setRef}
          onEnter={addBlock}
          onDelete={deleteBlock}
          onFocusNext={onFocusNext}
          onFocusPrev={onFocusPrev}
          onFocusPrevLeft={onFocusPrevLeft}
        />
      ))}
    </div>
  );
};

const loggingForSearch = (
  name: string,
  blockLogging: boolean,
  blocks?: { id: string }[]
) => {
  console.log(`${name} function called`);
  if (blockLogging && blocks) {
    blocks.forEach((block) => {
      console.log(block.id);
    });
  }
};
