import NavBar from "./NavigationBar/NavBar";
import { Outlet } from "react-router-dom";
import FooterContent from "./Footer/FooterContent";
import { ChakraProvider } from "@chakra-ui/react";
import TextEditor from "../DocsGenerator/TextEditor";
import { useContext, useState } from "react";

const Layout = () => {
  const [editorVisible, setEditorVisibility] = useState(false);

  const htmlContent = `<p style="margin-top:0pt; margin-bottom:10pt; text-align:center; line-height:115%; widows:0; orphans:0; font-size:18pt;"><strong><span style="font-family:'Baskerville Old Face';">RENT AGREEMENT</span></strong></p>
  <p style="margin-top:0pt; margin-bottom:10pt; text-align:center; widows:0; orphans:0;">This RENT AGREEMENT is made and executed at <span >Gamma-2, Greater Noida</span> on this <span >01/10/2023</span></p>
  <p style="margin-top:0pt; margin-bottom:10pt; text-align:center; widows:0; orphans:0;"><strong><span style="font-family:'Bodoni MT';">BETWEEN</span></strong></p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;"><strong><span >Harshit Kesharwani</span></strong> , R/O , <span>G9, Alpha-2, Greater Noida, UP, 201308</span>.</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;"><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span>(<strong>hereinafter referred to as LANDLORD / OWNER LESSOR</strong>)</p>
  <p style="margin-top:0pt; margin-bottom:10pt; text-align:center; widows:0; orphans:0;"><strong><span style="font-family:'Bodoni MT';">AND</span></strong></p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;"><strong><span >Joy Swaroop</span></strong> S/o , Santosh Kumar, R/O , <span >Delta-1, Greater Noida, UP-201310</span>.</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;"><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span>(<strong>hereinafter referred to as TENANT</strong>)</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;">The expression of the LANDLORD and the TENANT shall mean and include their legal heirs, successors, executors, administrators, representatives, assigns and nominees etc.</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;">WHEREAS the LANDLORD is the sole and complete owner of <span >G9, Alpha-2, Greater Noida, UP, 201308</span>.</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;<span style="width:33.51pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span><span style="width:36pt; display:inline-block;">&nbsp;</span>(<strong>hereinafter called the said property</strong>)</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;">WHEREAS on the request of the TENANT, the LANDLORD has agreed to let out the said property and the TENANT has also agreed to take the same on monthly rent of Rs. <strong><span >7500</span></strong> (Rupees <span>Seven Thousand Five Hundred </span>) on the following agreed terms and conditions of this agreement as under:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
  <ol type="1" style="margin:0pt; padding-left:0pt;">
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the TENANT has taken the said premises only for lawful <strong>RESIDENTTAL PURPOSE</strong> and not for any other purpose.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the tenancy shall commence <span >from 01/10/2023 for a period of 11 months only</span>. However the said tenancy period can be extended further with the mutual consent of both the parties with a fresh/new Rent Agreement.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the LANDLORD/OWNER can inspect the said premises at any reasonable time in the presence of the TENANT and the TENANT shall have no objection for the same in future.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the TENANT shall pay the said monthly rent in advance up to 7<span style="line-height:115%; font-size:7.33pt;"><sup>th</sup></span> day of each English Calendar month.</li>
  </ol>
  <p style="margin-top:0pt; margin-bottom:10pt;"><br style="page-break-before:always; clear:both;"></p>
  <p style="margin-top:0pt; margin-bottom:10pt; text-align:center; widows:0; orphans:0;"><strong>&nbsp;</strong></p>
  <ol start="5" type="1" style="margin:0pt; padding-left:0pt;">
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That The TENANT shall pay society/R.W.A./maintenance Charges and Electricity / Water charges of the said premises beside the aforesaid monthly rent as per electric / water meter reading. That the owner shall be responsible for payment of House Tax.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the TENANT shall not store or stock any objectionable items, hazardous, inflammable and offensive articles etc. In the said tenanted premises</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; widows:0; orphans:0; padding-left:4.65pt;">That the TENANT shall not sub-let the said premises or any portion thereof to anybody else.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0; padding-left:4.65pt;">That the TENANT shall not damage the said premises or any portion thereof and he shall keep the said premises quite neat and clean in all respect.</li>
      <li style="margin-left:31.35pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0; padding-left:4.65pt;">That the time of occupation the TENANT shall see that all Sanitary/Water/Electrical and others fitting and Fixture are in perfect order and shall be responsible to re-store them in which they have been taken over.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0;">That the TENANT shall not make any additions or alterations in the said premises without written consent of the LANDLORD / OWNER</li>
      <li style="margin-left:36pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0;">That if the TENANT want to vacate the said premises before the expiry of tenancy period, then he shall serve 30 days prior notice to the LANDLORD/OWNER and similarly if the LANDLORD/ OWNER under unacceptable, unpleasant terms and conditions or circumstances.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0;">That the TENANT shall not make any additional or alterations in said premises without written consent of the LANDLOAD/OWNER.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0;">That the minor repairs such as leakages to water taps, electric fuses etc., shall be carried out by the TENANT and all the major repair such as bursting of pipes, cracking the walls etc., shall be carried out by the LANDLORD / OWNER.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; text-align:justify; widows:0; orphans:0;">&nbsp;That the TENANT shall abide by all the rules and regulations of DDA, MCD, BSES Rajdhani Power Limited, DJB, Delhi Administration or any other authority etc.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">That the minor repairs such as leakages to water taps, electric fuses etc., shall be carried out by the TENANT and all the major repairs such as bursting of pipes, cracking the walls etc. Shall be carried out by the LANDLORD</li>
      <li style="margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">That all disputes shall subject to Delhi Jurisdiction only.</li>
  </ol>
  <p style="margin-top:0pt; margin-bottom:10pt;"><br style="page-break-before:always; clear:both;"></p>
  <ol start="17" type="1" style="margin:0pt; padding-left:0pt;">
      <li style="margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">That the TENANT has also paid one month&rsquo;s advance rent to the LANDLORD at the time of signing of this rent agreement.</li>
      <li style="margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">It is clearly understood agreed to and accepted by and between the parties that nothing in this present agreement, shall be concluded as any legal right in respect of leased premises and not create any relationship of land-lord &amp; tenant or whatsoever kind except LESSOR &amp; TENANT.</li>
  </ol>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;"><strong>IN WITNESS WHERE OF</strong> , the LANDLORD / OWNER and the TENANT executed this agreement, in the&nbsp; presence&nbsp; of&nbsp; the&nbsp; following&nbsp; witnesses:-</p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;"><strong>&nbsp;</strong></p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Signature of Landlord</span><span style="font-family:'Times New Roman';">&nbsp;</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Name of Witness</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">&nbsp;</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">&nbsp;</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Signature of TENANT</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Name of witness</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">&nbsp;</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Signature of</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Witness 1</span></p>
  <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; text-align:justify; line-height:150%; font-size:12pt;"><span style="font-family:'Times New Roman';">Witness 2</span></p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>
  <p style="margin-top:0pt; margin-left:36pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>
  <p style="margin-top:0pt; margin-bottom:10pt; widows:0; orphans:0;">&nbsp;</p>`;

  const OpenEditor = () => {
    setEditorVisibility(true);
  };
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <div id="main">
          <Outlet context={{ OpenEditor }} />
        </div>
      </ChakraProvider>

      {editorVisible && <TextEditor generatedContent={htmlContent} />}

      <ChakraProvider>
        <FooterContent />
      </ChakraProvider>
    </>
  );
};

export default Layout;
