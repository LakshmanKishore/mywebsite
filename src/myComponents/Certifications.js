import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

export const Certifications = () => {
  let certificates = [
    {
      "no": 0,
      "title": "NPTEL Data Science Domain Certificate",
      "image": "/certificates/domain.jpg"
    },
    {
      "no": 1,
      "title": "NPTEL Discipline Star",
      "image": "/certificates/disciplineStar.jpg"
    },
    {
      "no": 2,
      "title": "Computer Vision",
      "image": "/certificates/computerVision.jpg"
    },
    {
      "no": 3,
      "title": "Deep Learning",
      "image": "/certificates/deepLearning.jpg"
    },
    {
      "no": 4,
      "title": "Learning Analytics Tools",
      "image": "/certificates/learningAnalyticsTools.jpg"
    },
    {
      "no": 5,
      "title": "Introduction to Machine Learning",
      "image": "/certificates/introductionToMachineLearning.jpg"
    },
    {
      "no": 6,
      "title": "Data Analytics with Python",
      "image": "/certificates/dataAnalyticsWithPython.jpg"
    },
    {
      "no": 7,
      "title": "Introduction to Internet of Things",
      "image": "/certificates/introductionToInternetOfThings.jpg"
    },
    {
      "no": 8,
      "title": "Programming, Data Structures and Algorithms using Python",
      "image": "/certificates/pdsaUsingPython.jpg"
    },
    {
      "no": 9,
      "title": "Enhancing Soft Skills and Personality",
      "image": "/certificates/softSkills.jpg"
    }
  ]
  return (
    <div className="bg-black2">
      <div className="container">
        <div className="routeHeading">
          Certifications
        </div>
        {certificates.map(({no, title, image}) => {
          return (
            <Card bg="dark" className='m-4' key={no}>
              <Card.Body>
                <Card.Text>
                  {title}
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={image} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
