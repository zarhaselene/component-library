import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";
import {
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineStar,
} from "react-icons/ai";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Buttons */}
        <h2 className="text-lg font-bold">Buttons</h2>
        <Button size="sm" color="blue" title="Small Blue" />
        <Button size="md" color="red" title="Disabled Red" disabled />
        <Button size="lg" color="green" title="Large Green" />

        {/* Alerts */}
        <h2 className="text-lg font-bold">Alerts</h2>
        <Alert color="blue" title="Info Alert" icon={<AiOutlineInfoCircle />} />
        <Alert
          color="red"
          title="Error Alert"
          icon={<AiOutlineCheckCircle />}
        />
        {/* Badges */}
        <h2 className="text-lg font-bold">Badges</h2>
        <Badge
          size="sm"
          title="Small Badge"
          color="blue"
          icon={<AiOutlineStar />}
        />

        <Badge
          size="md"
          color="red"
          title="Medium Badge"
          icon={<AiOutlineStar />}
        />
        {/* Card */}
        <h2 className="text-lg font-bold">Card</h2>
        <Card
          href="https://placehold.co/400"
          imgSrc="https://placehold.co/400"
          imgAlt="Example Image"
        >
          <h3 className="text-lg font-bold">Example Card</h3>
          <p>This is a card description.</p>
        </Card>
      </div>
    </>
  );
}

export default App;
