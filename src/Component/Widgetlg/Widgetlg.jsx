import React from "react";
import "./Widgetlg.css";

export default function Widgetlg() {
  const Button = ({ type }) => {
    return <button className={"widgetlgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <span className="widgetlg_Title"> Transaction </span>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Ajithkumar</span>
          </td>
          <td className="widgetlgDate">22 Dec 2022</td>
          <td className="widgetlgAmount">$506</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Ajee</span>
          </td>
          <td className="widgetlgDate">03 Mar 2022</td>
          <td className="widgetlgAmount">$686</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Ajithkumaranand</span>
          </td>
          <td className="widgetlgDate">05 June 2022</td>
          <td className="widgetlgAmount">$506</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Krishnaanand</span>
          </td>
          <td className="widgetlgDate">05 Aug 2022</td>
          <td className="widgetlgAmount">$741</td>
          <td className="widgetlgStatus">
            <Button type="Rejected" />
          </td>
        </tr>
      </table>
    </div>
  );
}
