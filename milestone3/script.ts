const form1 =document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayelement2=document.getElementById('resume-display') as HTMLDivElement

form1.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value

    const  resumeHTML= `<h2><b>Resume</b></h>
    <h3>Personal Information</h3>
    <p><b>Name</b>${name}</p>
    <p><b>Email</b>${email}</p>
    <p><b>phone</b>${phone}</p>
    <h3>Education</h3>
    <p>${education}</P>
    <h3>Experience</h3>
    <p>${experience}</P>
    <h3>skills</h3>
    <p>${skills}</P>
    `;
    if(resumeDisplayelement2){
        resumeDisplayelement2.innerHTML=resumeHTML;
    }else{
        console.error('The Resume display Element is Missing')
    }
});