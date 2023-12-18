import React from "react";
import "../index.css";

const toolsBuilt = [
  "Custom mock server for api service. Unlocked ci/cd and improved developer experience",
  "Jest component web testing",
  "Playwright UI test framework for web-testing",
  "Maestro UI test framework for mobile-app testing",
  "Team/Stakeholder testing process before release of new features",
];

const achievements = [
  "Core flow E2E tests for local and ci/cd environments",
  "100 component tests for web project",
  "100% of new features are tested by the team and stakeholders.",
];

const snapchatToolsBuilt = [
  "Custom pixel comparison test framework to validate Bitmoji Avatar edits in the web project.",
  "Browserstack (cloud device test environment) integration",
  "Jest component web testing",
  "Test Plan",
  "Automated weekly high-priority bug emailer",
];

const snapchatAchievements = [
  "E2E iOS and Android mobile app tests with XCUITest and Espresso",
  "Bitmoji Avatar Builder E2E tests after user pushes",
  "Last 4 quarters, 0 production hotfixes, no regressions",
  "Last 4 quarters, 0 production high/critical new feature bugs in production",
  "Built and managed a regression testing QA team.",
];


export default function Resume() {
  return (
    <div className=" bg-wetSand section py-10 ">
      <div class="pt-12 pb-4 px-6">
        <div class="py-4">
          <h2 class="font-bold text-4xl ">RESUME</h2>
          <div className="border-t-4 border-black mt-1"></div>

        {/* Vetster Job */}
        <div class="my-2">
          <p class="font-semibold text-xl">Vetster, Software Test Engineer</p>
          <p class="text-sm">Toronto, On</p>
        </div>
        <div className="border-t-2 border-black mt-2"></div>
        <div class="">
          <ul className="pt-1 list-disc text-base">
            <h2 className="text font-bold">Tools Built:</h2>
            {toolsBuilt.map((item, index) => (
              <li key={index} className="mx-4 my-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-black mt-2"></div>
        <div class="">
          <ul className="pt-1 list-disc text-base">
            <h2 className="text font-bold">Achievements:</h2>
            {achievements.map((item, index) => (
              <li key={index} className="mx-4 my-1">
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t-2 border-black mt-2"></div>

        </div>

        <div class="mt-4 mb-2">
          
          <p class="font-semibold text-xl">Snapchat, Toronto — Quality Engineering Lead</p>
          <p class="text-sm">Jan 2019 - August 2023</p>
        </div>
        <div className="border-t-2 border-black mt-2"></div>
        <div class="">
          <ul className="pt-1 list-disc text-base">
            <h2 className="text font-bold">Tools Built:</h2>
            {snapchatToolsBuilt.map((item, index) => (
              <li key={index} className="mx-4 my-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-black mt-2"></div>
        <div class="">
          <ul className="pt-1 list-disc text-base">
            <h2 className="text font-bold">Achievements:</h2>
            {snapchatAchievements.map((item, index) => (
              <li key={index} className="mx-4 my-1">
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t-2 border-black mt-2"></div>

        </div>
        </div>
      </div>
    </div>
  );
}
