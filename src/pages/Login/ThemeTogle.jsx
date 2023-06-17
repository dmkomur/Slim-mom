import {
  TogleSwitch,
  StyledTogleLable,
  StyledInput,
  StyledThemeSpan,
} from './ThemeTogle.styled';
export const ThemeTogle = () => {
  return (
    <TogleSwitch>
      <StyledTogleLable>
        <StyledInput type="checkbox" />
        <StyledThemeSpan></StyledThemeSpan>
      </StyledTogleLable>
    </TogleSwitch>
  );
};
