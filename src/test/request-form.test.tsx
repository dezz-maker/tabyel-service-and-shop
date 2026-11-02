import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { RequestForm } from "@/components/RequestForm";

vi.mock("@/lib/requests.functions", () => ({ submitServiceRequest: vi.fn() }));

afterEach(cleanup);

describe("Campaign request selection", () => {
  it("preselects the Plejd campaign and includes it in submitted form data", () => {
    render(<RequestForm type="quote" defaultService="Plejd-kampanj" />);
    const select = screen.getByRole("combobox", { name: "Tjänst" });
    expect((select as HTMLSelectElement).value).toBe("Plejd-kampanj");
    const form = select.closest("form");
    if (!form) throw new Error("Request form is missing");
    expect(new FormData(form).get("service")).toBe("Plejd-kampanj");
  });
});