//import "materialize-css/dist/css/materialize.min.css";
// import "../custom-components/Footer.css";
import React from "react";

const FooterContent3 = (props) => {
  console.log("Footer Content3", props);
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
        <li>
          <a href={fields.link6.href}>{fields.link6.text}</a>
        </li>
        <li>
          <a href={fields.link7.href}>{fields.link7.text}</a>
        </li>
        <li>
          <a href={fields.link8.href}>{fields.link8.text}</a>
        </li>
        <li>
          <a href={fields.link9.href}>{fields.link9.text}</a>
        </li>
        <li>
          <a href={fields.link10.href}>{fields.link10.text}</a>
        </li>
        <li>
          <a href={fields.link11.href}>{fields.link11.text}</a>
        </li>
        <li>
          <a href={fields.link12.href}>{fields.link12.text}</a>
        </li>
        <li>
          <a href={fields.link13.href}>{fields.link13.text}</a>
        </li>
        <li>
          <a href={fields.link14.href}>{fields.link14.text}</a>
        </li>
        <li>
          <a href={fields.link15.href}>{fields.link15.text}</a>
        </li>
        <li>
          <a href={fields.link16.href}>{fields.link16.text}</a>
        </li>
        <li>
          <a href={fields.link17.href}>{fields.link17.text}</a>
        </li>
        <li>
          <a href={fields.link18.href}>{fields.link18.text}</a>
        </li>
        <li>
          <a href={fields.link19.href}>{fields.link19.text}</a>
        </li>
        <li>
          <a href={fields.link20.href}>{fields.link20.text}</a>
        </li>
        <li>
          <a href={fields.link21.href}>{fields.link21.text}</a>
        </li>
        <li>
          <a href={fields.link22.href}>{fields.link22.text}</a>
        </li>
        <li>
          <a href={fields.link23.href}>{fields.link23.text}</a>
        </li>
        <li>
          <a href={fields.link24.href}>{fields.link24.text}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContent3;
