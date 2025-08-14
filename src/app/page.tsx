  import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";

  export default function Home() {
    return (
      <>
        <Button variant="default" size="lg">
          Click me
        </Button>

        <Input placeholder="Default input" />

        <Input variant="filled" placeholder="Filled input" inputSize="lg" />

        <Input variant="unstyled" placeholder="Unstyled input" />

        <Input variant="error" placeholder="Error input" />
      </>
    );
  }
