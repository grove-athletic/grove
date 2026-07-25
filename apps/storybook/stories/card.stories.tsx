import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@repo/ui/components/card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <div>
          <CardTitle>Example Card</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>Content inside the card.</CardContent>
      <CardFooter>Footer area</CardFooter>
    </Card>
  ),
};
