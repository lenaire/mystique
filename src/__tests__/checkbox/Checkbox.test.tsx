import renderer from "react-test-renderer";
import { ThemeProvider } from "$cmp/theme-provider/ThemeProvider";
import { Checkbox, CheckboxProps } from "$cmp/checkbox/Checkbox";

describe("<Checkbox />", () => {
  it("renders correctly", () => {
    const props: CheckboxProps = {
      onChange: jest.fn()
    };

    const tree = renderer
      .create(
        <ThemeProvider>
          <Checkbox {...props} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
