import { MenuBlockSchema } from "@suncel/nextjs";
import { TitleAndSub } from "./blocks/hero/titleAndSub";
import flowbiteBlocks from "@suncel/ui/flowbite";

export const menuBlocks: MenuBlockSchema[] = [
  flowbiteBlocks,
  {
    category: "Page blocks",
    blocks: [
      {
        name: "Hero",
        variants: [
          {
            image: "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",
            component: TitleAndSub,
            name: "Title And Sub Hero",
            description: "A simple title and one optional subtitle",
          },
        ],
      },
    ],
  },
];
