import React from "react";
import { Routes, Route } from "react-router";
import { NotFoundPage } from "../pages";
import { ProjectsLayout } from "../components";

function toRouteComponent({ path, component, errorBoundary }) {
  return (
    <Route
      key={path}
      path={path}
      Component={component}
      ErrorBoundary={errorBoundary}
    />
  );
}
function RoutesComponent({ routes }) {
  return (
    <Routes>
      <Route element={<ProjectsLayout />}>{routes.map(toRouteComponent)}</Route>
      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
}

export default RoutesComponent;
