"use client";

import { Tree, Folder, File, CollapseButton } from "@/components/tree-view-api";

const TreeFileTest = () => {
  const elements = [
    {
      id: "1",
      isSelectable: true,
      name: "src",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "app.tsx",
        },
        {
          id: "3",
          isSelectable: true,
          name: "components",
          children: [
            {
              id: "20",
              isSelectable: true,
              name: "pages",
              children: [
                {
                  id: "21",
                  isSelectable: true,
                  name: "interface.ts",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          isSelectable: true,
          name: "ui",
          children: [
            {
              id: "7",
              isSelectable: true,
              name: "carousel.tsx",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Tree
      className="rounded-md h-full bg-secondary overflow-hidden p-2"
      initialSelectedId="21"
      elements={elements}
    >
      {elements.map((element) => {
        if (element.children) {
          return (
            <Folder key={element.id} element={element.name} value={element.id}>
              {element.children.map((child) => {
                if (child.children) {
                  return (
                    <Folder
                      key={child.id}
                      element={child.name}
                      value={child.id}
                    >
                      {child.children.map((grandChild) => {
                        return (
                          <File key={grandChild.id} value={grandChild.id}>
                            <p>{grandChild.name}</p>
                          </File>
                        );
                      })}
                    </Folder>
                  );
                }
                return (
                  <File key={child.id} value={child.id}>
                    <p>{child.name}</p>
                  </File>
                );
              })}
            </Folder>
          );
        }
        return (
          <File key={element.id} value={element.id}>
            <p>{element.name}</p>
          </File>
        );
      })}
    </Tree>
  );
};

export default TreeFileTest;
