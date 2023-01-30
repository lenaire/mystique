import renderer from "react-test-renderer";
import { ThemeProvider } from "$cmp/theme-provider/ThemeProvider";
import { Icon, IconProps } from "$cmp/icon/Icon";

describe("<Icon />", () => {
  it("renders correctly", () => {
    const props: IconProps = {
      icon: "alert",
    };

    const tree = renderer
      .create(
        <ThemeProvider>
          <Icon {...props} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
