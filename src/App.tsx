import "./App.css";
import TextEditor from "./DocsGenerator/TextEditor";

function App() {
  const htmlContent = `<h1 style="text-align:center;">Tenant's Affidavit</h1>

  <p><strong>In the Court of [Name of the Civil Court], [Location]</strong></p>
  
  <p><strong>Case No: [If applicable]</strong></p>
  
  <p><strong>Regarding Early Vacation of Rented Property</strong></p>
  
  <h2><strong>Affidavit</strong></h2>
  
  <p>I, <strong>[Your Full Name]</strong>, residing at <strong>[Your Current Address]</strong>, do solemnly affirm and state as follows:</p>
  
  <ol>
      <li>I am the tenant of the property located at <strong>[Address of Rented Property]</strong> under a valid rent agreement dated <strong>[Date of Rent Agreement]</strong>. The said agreement is valid for a period of <strong>[Remaining Months]</strong> more months.</li>
      
      <li>The landlord, <strong>[Landlord's Full Name]</strong>, has served me with a notice dated <strong>[Date of Notice]</strong>, asking me to vacate the premises <strong>[Specify Reason for Early Vacation Request, if mentioned in the notice]</strong> before the expiration of the rent agreement.</li>
      
      <li>I believe that the request for early vacation is not in compliance with the terms and conditions of the rent agreement, and it is causing me undue hardship as I had planned my living arrangements and expenses based on the terms of the agreement.</li>
      
      <li>I have been paying the rent regularly and complying with all the terms of the rent agreement.</li>
      
      <li>I request the Honorable Court to uphold the terms of the valid rent agreement and prevent any unjust eviction or early vacation of the property.</li>
  </ol>
  
  <p>I solemnly affirm that the above statements are true and correct to the best of my knowledge and belief, and I make this affidavit in support of my request to maintain my tenancy rights as per the existing rent agreement.</p>
  
  <p><strong>Date:</strong> [Date of Affidavit]</p>
  
  <p><strong>Place:</strong> [Location of Affidavit]</p>
  
  <p><strong>Signature:</strong> __________<br>
  (Signature of Affiant)</p>
  
  <p><strong>Name:</strong> [Your Full Name]</p>
  
  <p><strong>Address:</strong> [Your Current Address]</p>
  
  <p><strong>Contact Number:</strong> [Your Contact Number]</p>
  
  <p><strong>Email Address:</strong> [Your Email Address]</p>
  
  <p><strong>Note:</strong> It is advisable to consult with a legal professional for guidance in your specific case. This affidavit is a general template and should be adapted to your situation and any legal advice received.</p>`;

  return (
    <>
      <TextEditor generatedContent={htmlContent}></TextEditor>
    </>
  );
}

export default App;
