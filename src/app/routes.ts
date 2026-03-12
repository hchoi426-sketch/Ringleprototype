import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LearningPage from "./pages/LearningPage";
import CompletionPage from "./pages/CompletionPage";
import CompletionPage2 from "./pages/CompletionPage2";
import Step2Page1 from "./pages/Step2Page1";
import Step2Page2 from "./pages/Step2Page2";
import Step2Page3 from "./pages/Step2Page3";
import SavedExpressionsPage from "./pages/SavedExpressionsPage";
import ReviewCardsPage from "./pages/ReviewCardsPage";
import ReviewCompletePage from "./pages/ReviewCompletePage";
import ReportPage from "./pages/ReportPage";
import RolePlayPage from "./pages/RolePlayPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/learning",
    Component: LearningPage,
  },
  {
    path: "/completion",
    Component: CompletionPage,
  },
  {
    path: "/step2-1",
    Component: Step2Page1,
  },
  {
    path: "/step2-2",
    Component: Step2Page2,
  },
  {
    path: "/step2-3",
    Component: Step2Page3,
  },
  {
    path: "/completion-2",
    Component: CompletionPage2,
  },
  {
    path: "/saved-expressions",
    Component: SavedExpressionsPage,
  },
  {
    path: "/review-cards",
    Component: ReviewCardsPage,
  },
  {
    path: "/review-complete",
    Component: ReviewCompletePage,
  },
  {
    path: "/report",
    Component: ReportPage,
  },
  {
    path: "/roleplay",
    Component: RolePlayPage,
  },
]);