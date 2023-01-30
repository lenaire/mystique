import renderer from "react-test-renderer";
import { ThemeProvider } from "$cmp/theme-provider/ThemeProvider";
import { Toaster, ToasterProps } from "$cmp/toaster/Toaster";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createPortal: (node: React.ReactNode): React.ReactPortal => node,
}));

describe("<Icon />", () => {
  it("renders correctly", () => {
    const props: ToasterProps = {
      portalId: "toasts",
    };

    const tree = renderer
      .create(
        <ThemeProvider>
          <Toaster {...props} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
