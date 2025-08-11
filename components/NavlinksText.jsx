import React from 'react'
import { WordRotate } from "@/components/magicui/word-rotate";

const NavlinksText = ({text1, text2}) => {
  return (
    <div>
       <WordRotate
      className="text-md  font-semibold "
      words={[text1, text2]}
    />
    </div>
  )
}

export default NavlinksText
 