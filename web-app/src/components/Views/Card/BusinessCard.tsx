import logo from "../../../assets/logo.png";
import { IUser } from "../../../configures/interfaces";
import jsPDF from "jspdf";
import DefaultButton from "../Button/DefaultButton";
import { useRef } from "react";
import html2canvas from "html2canvas";

export default function BusinessCard(user: IUser) {
    const printRef = useRef<HTMLDivElement>(null);

    const handleDownloadPdf = async () => {
        const element:any = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: "p",
        });
       
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
    
        console.log(pdfWidth, pdfHeight, imgProperties)
        pdf.addImage(data, 'JPG', 0, 0,pdfWidth,pdfHeight)
        pdf.save(`${user.name}.pdf`);
      };

    return (
        <div ref={printRef} className="container">
            <div className="card">
                <div className="front">
                    <div className="front-profile-image">
                        <img alt={user.name} src={user.image} width="150px" />
                        <h1>{user.name} {user.surname}<span>{user.title}</span></h1>
                    </div>
                    <ul className="card-ul">
                        <li>{user.phone}</li>
                        <li>{user.email}</li>
                    </ul>
                </div>
                <div className="back">
                    <img alt="Logo" src={logo} width="250px" />
                </div>
            </div>
            <DefaultButton onClick={handleDownloadPdf}>PDF indir</DefaultButton>
        </div>
    )
}

