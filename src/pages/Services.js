import React from "react"
import serviceArray from "../assets/api/servicesArray"

import PageHeader from "../components/PageHeader.js"
import ServiceListing from "../components/ServiceListing"

const services = serviceArray.map(svc => {
  return (
    <ServiceListing
      key={svc.id}
      serviceTitle={svc.title}
      serviceImage={svc.image}
      serviceImageAlt={svc.imgAlt}
      description={svc.description.map(p => (
        <p key={p}>{p}</p>
      ))}
      servicesList={svc.servicesList.map(li => (
        <li key={li}>{li}</li>
      ))}
    />
  )
})

const Projects = props => {
  return (
    <React.Fragment>
      <PageHeader text="Services" />
      {services}
    </React.Fragment>
  )
}

export default Projects
