import React from 'react';
import styled from "styled-components";


function About() {
    return(
        <Wrapper>
            <h1>About</h1>
            <div style={{backgroundColor:'rgba(244, 244, 244, 0.9)', padding:'10%', borderRadius:'5px'}}>
                <span style={{
                    fontSize:'150px', 
                    lineHeight:'0.6em', 
                    opacity:'0.2', 
                    userSelect:'none', 
                    float: 'right'
                }}>
                    &#10077;
                </span>
                <h3>We Are:</h3>
                <p>
                  Bouyant Ideal LTD, a licensed agricultural products export company based in Lagos Nigeria. We have over 4 years experience in the processing and export of agricultural products like salted beef omasum, beef pizzles, cow tail, cow tongue, cow skin, cow horns, bitter kola, goat and sheep skin among others.<br/>
                  Our goal has always being to satisfy our customers by supplying high quality products in line with international standard.  
              
                </p>
                <h3>Our History</h3>
                <p>
                
We are commited to nurturing life. This is not limited to food production – it goes on to the projects, initiatives and causes that we embrace. To deliver quality products, we rely on a team that is dedicated to innovation every single day. We are more than 100  employees across the States in Nigeria. 

Each member of our team is important to make Bouyant Ideal ltd one of the biggest agro product exporting company in Nigeria and West Africa at large. We are guided by values that serve as a compass for our work. The ethics in all our actions, the transparency in our chain of value and the innovation are unnegotiable stakes for us.

However, we can’t do all that by ourselves: apart from our employees, we count on the support of over 30 integrated Contractors across Nigeria.  Operating in this manner expands the personal developmental possibilities in our employees. That is the constitution of our great community, which is diverse, entrepreneurial and passionate.

<h3>OUR AIM</h3>
Most important value is people. As simple as that. The people who aspire to and perform the activities that drive our company on its path of innovation, globalization, quality and sustainable management. This recognition has its origins in an internal culture that transcends walls, doors and hierarchies, which is the driving force that all employees transmit to and receive from one another. That’s the culture of our company, a set of initiatives, values and attributes that change everything: our connection to markets, the relations between managers and teams, the partnership between departments and even the motivation that drives us in our day-to-day activities. Engagement in this culture occurs transversally across the hierarchical structure and empowers each person: their expectations, their ideas and their positive inconformity that drives change throughout our company.

Our company is a life philosophy, not a corporate one, in which we are the protagonists and responsible for expanding and transforming it in accordance with regional and cultural particularities. We believe in combining our differences to strengthen our relationships and ensure that everyone, from all units across the States, is working on the same page.

                </p>
                <h3>Company Overview</h3>
                <ul>
                    <li>Established in 2010</li>
                    <li>Registertion Number: 76574637</li>

                    <li>Head-Office: Lagos, Nigeria </li>
                </ul>
               
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(about.jpg) no-repeat fixed;
    height: 100vh;
    padding: 10%;
    font-family: 'Roboto', sans-serif;
    font-size: 120%;
    overflow: auto;

    h1{ 
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 150%; 
        
        &::after{
            border-bottom: solid 1px #FF8A20;
            bottom: 0;
            content: "";
            display: block;
            width: 15%;
        }
    }

    h3{
        font-weight: 900;
    }
`;

export default About