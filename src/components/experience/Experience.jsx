import React from 'react'
import "./experience.scss"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {School,Work} from"@material-ui/icons";
export const Experience = () => {
  return (
    <div className='experience' id="experience">
      <h2>Experience</h2>
      
      <VerticalTimeline lineColor="grey">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2020-2024"
        contentStyle={{ background: '#f0f0f0', color: 'black' }}
        iconStyle={{background:"crimson", color:"white"}}
        icon={<School />}
        position='left'
        >
        <div className='info'>
          <h3 className="vertical-timeline-element-title">
            The LNM Institiute Of Information Technology, Jaipur
          </h3>
          <h4>B.Tech-Computer Science [2020-2024]</h4>
          <p>CGPA: 7.54/10.00</p>
          </div>
         </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2019-2020"
        contentStyle={{ background: '#f0f0f0', color: 'black' }}
        iconStyle={{background:"crimson", color:"white"}}
        icon={<School/>}
        position='right'
        >
        <div className='info'>
          <h3 className="vertical-timeline-element-title">
            Ess Ess Convent Sr.Sec School, Agra
          </h3>
          <h4>12th-CBSE [2019-2020]</h4>
          <p>Percentage: 94.00/100.00</p>
          </div> 
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2017-2018"
        contentStyle={{ background: '#f0f0f0', color: 'black' }}
        iconStyle={{background:"crimson", color:"white"}}
        icon={<School/>}
        position='left'
        >
        <div className='info'>
          <h3 className="vertical-timeline-element-title">
          
            St. George's School, Agra
          </h3>
          <h4>10th-CICSE [2017-2018]</h4>
          <p>Percentage: 95.00/100.00</p>
          </div>
          </VerticalTimelineElement>
           
          <VerticalTimelineElement className="vertical-timeline-element--work"
        date="01 June,2022 - 01 August,2022"
        iconStyle={{background:"grey", color:"white"}}
        contentStyle={{ background: '#f0f0f0', color: 'black' }}
        icon={<Work/>}
        position='right'
        >
        <div className='info'>
          <h3 className="vertical-timeline-element-title">
           LNMIIT Undergraduate Summer Internship Program
         
          </h3>
          <h4>[June(2022)-August(2022)]</h4>
          <p> Worked on optimizing the path for Multi-Warehouse robots</p>
          <button><a href="https://drive.google.com/file/d/1VUUBiEo9MzALbjaMOoGIIFOyNp2oM_Ug/view?usp=sharing" target="_blank">View Certificate</a></button>
          </div>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
