import renderer from "react-test-renderer";
import { ThemeProvider } from "$cmp/theme-provider/ThemeProvider";
import { Button, ButtonProps } from "$cmp/button/Button";

describe("<Button />", () => {
  it("renders correctly", () => {
    const props: ButtonProps = {
      label: "Continue",
    };

    const tree = renderer
      .create(
        <ThemeProvider>
          <Button {...props} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
