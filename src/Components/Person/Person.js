import React  from 'react';
// const inTuoi = ()=>{
//     return Math.floor(Math.random()*100);
// }
const sinhvien = (props) => {
    return (
        <div>
        {/* <p> I am a ABC  and I'm  {inTuoi()}  year old</p> */}
        <p> {props.hoten} - Tuoi: {props.tuoi} </p>
        <p> { props.children }</p>
        

        </div>
    );
    };
export default sinhvien;
