import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Card } from "./Card";

describe("Card", () => {
    it("is a function", () => {
        expect(Card).toBeInstanceOf(Function);
    });
    describe("rendering", () => {
        it("renders as a button", () => {
            render(<Card text="hej" />);
            expect(screen.getByRole("button")).toBeInTheDocument();
        });
        it("renders with expected text", () => {
            render(<Card text="hej" />);
            expect(screen.getByRole("button")).toHaveTextContent("hej");
        });
    });
});
