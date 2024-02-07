import React from "react";
import styles from "./results.module.css";
import CenterContainer from "../../../container/centerContainer";

const Results = () => {
  return (
      <div className={styles.result}>
        <div className={styles.topDetails}>
          <img
            src="https://res.cloudinary.com/omniswift/image/upload/v1648473802/wqouqp73otvvjmkkekkj.png"
            alt="logo"
            className={styles.result__logo}
          />
          <div>
            <h1>FREMONT COLLEGE OF EDUCATION</h1>
            <p>
              <span>No.5 Raymond Osuman Street, PMB 2191</span>
              <span>Maitama, Abuja, Nigeria.</span>
            </p>
            <h2>Post Graduate Diploma in Education</h2>
            <p>Student First Semester Statement Of Result</p>
          </div>
          <img
            src="https://res.cloudinary.com/omniswift/image/upload/v1648473914/tc4kvpfeocqkyhj560fc.png"
            alt="passport"
            className={styles.result__passport}
          />
        </div>
        <div className={styles.resultBody}>
          <div className="flex flex-row justify-between items-center">

            <div className="max-w-[150px] w-full space-y-6">
              <div className="flex flex-row  w-[inherit] gap-2 justify-between">
                <p className="font-bold">Name:</p>
                {/* <span>{data.data.firstname + ' ' + data.data.surname}</span> */}
                <span className="font-[500]">Peter bob</span>
              </div>
              <div className="flex flex-row gap-5">
                <p className="font-bold">Level:</p>
                {/* <span>{data.data.level}</span> */}
                <span>loo</span>
              </div>
            </div>
   

            <div className="max-w-[250px] w-full space-y-6">
              <div className="flex flex-row  w-[inherit]  justify-between">
                <p className="font-bold">Reg No:</p>
                {/* <span>{data.data.firstname + ' ' + data.data.surname}</span> */}
                <span className="font-[500]">FCE/PGDE/2021/001</span>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bold">Session:</p>
                {/* <span>{data.data.level}</span> */}
                <span>loo</span>
              </div>
            </div>
            
          </div>

          <div className={styles.resultBody__bottom}>
            <div className={styles.table__wrapper}>
              <table className={styles.table}>
                <thead className={styles.table__head}>
                  <tr>
                    <th>lopp</th>
                    <th>lopp</th>
                    <th>lopp</th>
                    <th>lopp</th>
                  </tr>
                </thead>
                <tbody className={styles.table__body}>
                  <tr>
                    <td >coo</td>
                    <td>coo</td>
                    <td>coo</td>
                    <td>coo</td>
                  </tr>
                  <tr>
                    <td >coo</td>
                    <td>coo</td>
                    <td>coo</td>
                    <td>coo</td>
                  </tr>
                  <tr>
                    <td >coo</td>
                    <td>coo</td>
                    <td>coo</td>
                    <td>coo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <table className={styles.table2}>
              <thead className={styles.table__head}>
                <tr>
                  <th>UNTS</th>
                  <th>UNTD</th>
                  <th>GPTS</th>
                  <th>GPTD</th>
                  <th>GPATS</th>
                  <th>GPATD</th>
                </tr>
              </thead>
              <tbody className={styles.table__body}>
                <tr>
                  <td >coo</td>
                  <td>coo</td>
                  <td>coo</td>
                  <td>coo</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.remarks}>
              <span>Remark:</span>
              {/* <span>{data.data.cummulative?.remarks}</span> */}
              <span>remarkd</span>
            </p>

            <div className={styles.signature}>
              <span>_________________________</span>
              <p>Registrar</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Results;
