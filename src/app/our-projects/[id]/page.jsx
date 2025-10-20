"use client";
import { projectDetails } from "../../../components/our-projects/projectData";
import ProjectDetails from "../../../components/our-projects/ProjectDetails";

export default function ProjectDetailsPage({ params }) {
  const project = projectDetails.find((p) => p.id === params.id);

  return <ProjectDetails project={project} />;
}