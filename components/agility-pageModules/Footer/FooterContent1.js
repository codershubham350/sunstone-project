import React from "react";

const FooterContent1 = (props) => {
  console.log("Footer Content1", props);
  const { fields } = props.module;
  return (
    <>
      <h2 className="ft-title">{fields.text}</h2>
      <ul>
        <li>
          <a href={fields.link1.href}>{fields.link1.text}</a>
        </li>
        <li>
          <a href={fields.link2.href}>{fields.link2.text}</a>
        </li>
        <li>
          <a href={fields.link3.href}>{fields.link3.text}</a>
        </li>
        <li>
          <a href={fields.link4.href}>{fields.link4.text}</a>
        </li>
        <li>
          <a href={fields.link5.href}>{fields.link5.text}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContent1;

{
  /* </div> */
}
