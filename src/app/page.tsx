import Scene1Mountains from "@/components/scenes/Scene1Mountains";
import Scene2Trail from "@/components/scenes/Scene2Trail";
import Scene3Checkpoints from "@/components/scenes/Scene3Checkpoints";
import Scene4Storm from "@/components/scenes/Scene4Storm";
import Scene4bProof from "@/components/scenes/Scene4bProof";
import Scene4cLearningTrail from "@/components/scenes/Scene4cLearningTrail";
import Scene5Ascent from "@/components/scenes/Scene5Ascent";
import Scene6AboveClouds from "@/components/scenes/Scene6AboveClouds";
import Scene7Summit from "@/components/scenes/Scene7Summit";
import Scene8NightSky from "@/components/scenes/Scene8NightSky";

export default function Home() {
  return (
    <main className="relative w-full bg-night text-snow">
      <Scene1Mountains />
      <Scene2Trail />
      <Scene3Checkpoints />
      <Scene4Storm />
      <Scene4bProof />
      <Scene5Ascent />
      <Scene4cLearningTrail />
      <Scene6AboveClouds />
      <Scene7Summit />
      <Scene8NightSky />
    </main>
  );
}
