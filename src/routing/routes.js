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
      component: ProjectDetails,
      errorBoundary: HomePage,
    },
  ];
}
