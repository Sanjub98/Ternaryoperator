import React from 'react'

function MarksSheet(props) {
    let engMarks=Number(props.engMarks);
    let telMarks=Number(props.telMarks);
    let socMarks=Number(props.socMarks);
    let matMarks=Number(props.matMarks);
    let sciMarks=Number(props.sciMarks);
    let hinMarks=Number(props.hinMarks);

    let totalMarks=engMarks+telMarks+socMarks+matMarks+sciMarks+hinMarks;
  return (
    <div>
      <table>
        <caption>{props.name} Marks Sheet</caption>
        <thead>
            <tr>
                <td>Subject</td>
                <td>Max.Marks</td>
                <td>Marks Gained</td>
                <td>Result</td>
                <td>Remarks</td>
            </tr>
        </thead>
      <tbody>
      <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Telugu</td>
                <td>Max.Marks</td>
                <td>{telMarks}</td>
                <td>{telMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>Max.Marks</td>
                <td>{socMarks}</td>
                <td>{socMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>Max.Marks</td>
                <td>{matMarks}</td>
                <td>{matMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>Max.Marks</td>
                <td>{sciMarks}</td>
                <td>{sciMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>Max.Marks</td>
                <td>{hinMarks}</td>
                <td>{hinMarks >= 35?"Pass":"Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>600</td>
                <td>{totalMarks}</td>
                <td>Result</td>
                <td>Excellent</td>
            </tr>
      </tbody>
      <tfoot></tfoot>
      </table>
    </div>
  )
}

export default MarksSheet
