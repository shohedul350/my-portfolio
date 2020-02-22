import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, AwardTitle,Awardby,} from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Award</SectionTitle>
        <ul>
          {user.awards.map((award, i) => (
            <WorkItem key={i}>
              <AwardTitle>{award.title}</AwardTitle>
         
              <div>
                <Awardby>{award.awarder}</Awardby> 
                {/* <span> &sdot; </span> */}
                <span>
                  {award.date}
                </span>
              </div>
              <Paragraph>{award.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
//title awarder  summary date