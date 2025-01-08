import { HomePage, NotFoundPage, ProjectDetails } from "../pages";

export function routes() {
  return [
    {
      path: "/",
      component: HomePage,
      errorBoundary: HomePage,
    },
    {
      path: "/projects",
      component: HomePage,
      errorBoundary: HomePage,
    },
    {
      path: "/projects/:projectId",
      component: ProjectDetails,
      errorBoundary: HomePage,
    },
    {
      path: "/projects/projectId",
      component: ProjectDetails,
      errorBoundary: HomePage,
    },
  ];
}
