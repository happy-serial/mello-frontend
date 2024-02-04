"use client";

import { log } from "console";
/**
 * TODO: 엔터치면 사라지는 문제 해결
 * TODO: 커서 아래로 안움직이는 문제 해결
 * TODO: block 넘어가는거 좌우 커서도 가능하게
 * TODO: 한글 입력 시 마지막 글자 추가되는 문제 해결
 * TODO: 키 꾹 누를 때 연속으로 입력되게 만들기
 *  */

import { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

interface ArticleWriteAreaProps {}

interface ContentBlockProps {
  id: string;
  blocks: { id: string }[];
  setRef: (id: string, ref: React.RefObject<HTMLInputElement>) => void;
  onEnter: (id: string) => void;
  onDelete: (id: string) => void;
  onFocusPrev: (id: string) => void;
  onFocusNext: (id: string) => void;
}

const parseContent = (content: string) => {};

const ContentBlock = ({
  id,
  blocks,
  setRef,
  onEnter,
  onDelete,
  onFocusNext,
  onFocusPrev,
}: ContentBlockProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [html, setHtml] = useState("");

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
    if (e.key === "Enter") {
      e.preventDefault();
      loggingForSearch("handleKeyDown before onEnter", true, blocks);
      onEnter(id);
    } else if (e.key === "Backspace" && ref.current?.innerText === "") {
      e.preventDefault();
      onDelete(id);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onFocusPrev(id);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onFocusNext(id);
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
      style={{ width: "900px", fontSize: "1.2rem" }}
    />
  );
};

export const ArticleWriteArea = () => {
  const [blocks, setBlocks] = useState([{ id: crypto.randomUUID() }]);
  const blockRefs = useRef<Record<string, React.RefObject<HTMLElement>>>({});

  useEffect(() => {
    console.log(blocks.length);
  }, [blocks.length]);

  const focusBlock = (targetId: string) => {
    loggingForSearch("focusBlock", false);
    const targetRef = blockRefs.current[targetId];
    if (targetRef && targetRef.current) {
      targetRef.current.focus();
    }
  };

  const onFocusNext = (id: string) => {
    const index = blocks.findIndex((block) => block.id === id);
    if (index >= 0 && index < blocks.length - 1) {
      focusBlock(blocks[index + 1].id);
    }
  };

  const onFocusPrev = (id: string) => {
    const index = blocks.findIndex((block) => block.id === id);
    if (index > 0) {
      focusBlock(blocks[index - 1].id);
    }
  };

  const setRef = (id: string, ref: React.RefObject<HTMLElement>) => {
    blockRefs.current[id] = ref;
  };

  const addBlock = (id: string) => {
    loggingForSearch("addBlock", true, blocks);
    const index = blocks.findIndex((block) => block.id === id);
    // const index = blocks.map((b) => b._id).indexOf(currentBlock.id);
    loggingForSearch("addBlock", true, blocks);
    const newBlock = { id: crypto.randomUUID() };
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, newBlock);

    setBlocks(newBlocks);
  };

  const deleteBlock = (id: string) => {
    loggingForSearch("deleteBlock", false);
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
          blocks={blocks}
          setRef={setRef}
          onEnter={addBlock}
          onDelete={deleteBlock}
          onFocusNext={onFocusNext}
          onFocusPrev={onFocusPrev}
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
