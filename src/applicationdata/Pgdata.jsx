import { useState, useEffect } from "react";
// import "./ShowFormData.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
// import { useLocation } from "react-router-dom";
function Pgdata(props) {
  // const location = useLocation()
  // const { apidata } = location.state || {}
//   const [formData, setFormData] = useState({});
//   const { istoken } = props;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: istoken,
//         };
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/get_pg_cource",
//           requestBody,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch form data. Status:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };
//     fetchData();
//   }, [istoken]);

const [formData, setFormData] = useState({});
  const { istoken } = props;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: istoken,
//         };
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/get_pg_cource",
//           requestBody,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch form data. Status:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };
//     fetchData();
//   }, [istoken]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: istoken,
        };

        const response = await axios.post(
          "http://localhost:8000/api/v1/get_pg_student",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch form data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchData();
  }, [istoken]);
  
  return (
    <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom:'20px' }}>
<table style={{ display: 'block', background: '#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left', width: '800px', color: '#444444', boxShadow: '0px 0 6px #ccc',marginTop:'20px'  }} cellSpacing="0" cellPadding="0" border="0" align="center">
          <tr>
    <td>
    </td>
  </tr>
 

<tr style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tr width="800px" style={{ width: '100%', display: 'grid', borderCollapse: 'collapse' }}>
    <tr width="800px" style={{ width: '800px', backgroundColor: 'white', height: '100px', borderBottom: '3px solid #006cb5'  }}>
      <td style={{ width: '800px', textAlign: 'center', verticalAlign: 'middle' }}>
        <span>
          <b style={{ marginBottom: '0px', color: '#006cb5', fontSize: '28px', fontWeight: 'bold' }}>UNIVERSITY OF KALYANI</b>
          <br />
          ( Department of Engineering and Technological Studies(DETS))<br/>
          (Kalyani, West Bengal,741235)
        </span>
      </td>
    </tr>
  </tr>
</tr>
            <tr style={{ display: 'block', padding: '20px' }}>
              <td style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>
                <table style={{ width: '760px', display: 'block', wordBreak: 'break-all', boxShadow: '0px 0 6px #ccc', background: '#fff', padding: '0px 15px', borderRadius: '5px', fontSize: '14px' }} cellSpacing="0" cellPadding="0" border="0" align="center">
                  <tbody>
                    <tr style={{textAlign: 'center', verticalAlign: 'middle',fontSize:'20px',paddingTop:'',}}>PG Addmission</tr>
                    {/* <tr>
                      <td colSpan="3" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif', fontSize: '12px' }}>
                        <span>Dear<br />Your inquiry has been received</span>
                      </td>
                    </tr> */}
                    <tr style={{ display: 'grid' }}>
                      <td colSpan={3}>
                        <table style={{ marginBottom: '20px', width: '730px', fontSize: '14px', textAlign: 'left', background: '#ffffff', border: '1px solid #cac2be', clear: 'both' }} cellSpacing="0" cellPadding="5" border="0" align="left">
                          <thead style={{}}>
                            <tr style={{ backgroundColor: '#006cb5', height: '20px', color: 'white' }}>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left',paddingLeft:'10px' }} width="30%">Info</th>
                              <th width="5%"><br /></th>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left',paddingLeft:'10px' }} width="65%">Details</th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Frist Name:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.fristName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Last Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.lastName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Father Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.fatherName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Mother Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.motherName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Email</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.email}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Date of Birth</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.date_of_birth}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Gender</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.gender}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Exam</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.exameType}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Category</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.category}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>All India Rank</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.allIndiaRank}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' ,paddingLeft:'10px'}}>Stream</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.stream}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Session</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.session}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Institute City</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.InstituteCity}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif',paddingLeft:'10px' }}>Institute Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{formData.InstituteName}</td>
                            </tr>


                            {/* <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Monthly Family Income</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{monthly_family_income}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Mobile No</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{mobileNo}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Bank Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{bank_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>IFSC Code</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{ifsc_code}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Account</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{account}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Account Holder's Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{account_holder_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{parent_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Relationship with guardian</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{relationship_with_guardian}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Occupation</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{parent_occupation}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Address</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{parent_address}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Email</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{parent_email}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Mobile No</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{parent_mobile_no}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>I Have Declared That</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{i_have_declared}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>S/o/D/o/W/o</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{s_o_w_o}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>R/o</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{R_o}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Place</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{place}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Date</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{date}</td>
                            </tr> */}


                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

            </tr>
          </table>
    </div>
  );
}
export default Pgdata
