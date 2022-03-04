import React from "react";
import "./LargeWidget.css";

function LargeWidget() {
  const Button = ({ type }) => {
    return <button className={"widgetl__btn " + type}>{type}</button>;
  };

  return (
    <div className="widget__l">
      <h3 className="widgetl__title">Latest transactions</h3>
      <table className="widgetl__table">
        <tr className="widgetl__tr">
          <th className="iwidgetl__th">Customer</th>
          <th className="iwidgetl__th">Date</th>
          <th className="iwidgetl__th">Amount</th>
          <th className="iwidgetl__th">Status</th>
        </tr>
        <tr className="widgetl__tr">
          <td className="widgetl__user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU"
              alt=""
              className="widgetl__img"
            />
            <span className="widgetl__un">Susan Smith</span>
          </td>
          <td className="widgetl__date">2 Feb 2022</td>
          <td className="widgetl__amount">€122.00</td>
          <td className="widgetl__date">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetl__tr">
          <td className="widgetl__user">
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
              alt=""
              className="widgetl__img"
            />
            <span className="widgetl__un">Alan Harper</span>
          </td>
          <td className="widgetl__date">2 Feb 2022</td>
          <td className="widgetl__amount">€2012.00</td>
          <td className="widgetl__date">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetl__tr">
          <td className="widgetl__user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNVIvJsxjowp8B04xuOAA1wQI_L3LzAbPKLn8dw2-z181hJAJ8-MH3-jLTVxaOABNDY8&usqp=CAU"
              alt=""
              className="widgetl__img"
            />
            <span className="widgetl__un">Mike Adler</span>
          </td>
          <td className="widgetl__date">2 Feb 2022</td>
          <td className="widgetl__amount">€188.00</td>
          <td className="widgetl__date">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default LargeWidget;
