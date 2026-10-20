import { Routes, Route } from 'react-router-dom';

function LandingPlaceholder() {
  return <div>SwasthyaSetu — Landing</div>;
}

function WorkerPlaceholder() {
  return <div>Worker App</div>;
}

function DashboardPlaceholder() {
  return <div>Dashboard</div>;
}

function LoginPlaceholder() {
  return <div>Login</div>;
}

function DesignPlaceholder() {
  return <div>Design System</div>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPlaceholder />} />
      <Route path="/app/*" element={<WorkerPlaceholder />} />
      <Route path="/dashboard/*" element={<DashboardPlaceholder />} />
      <Route path="/login" element={<LoginPlaceholder />} />
      <Route path="/design" element={<DesignPlaceholder />} />
    </Routes>
  );
}
