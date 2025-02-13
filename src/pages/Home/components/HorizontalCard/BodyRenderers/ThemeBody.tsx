import { useMantineColorScheme } from '@mantine/core';

export default function ThemeBody(): JSX.Element {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const opositeTheme = colorScheme === 'dark' ? 'light' : 'dark';
  return (
    <>
      <h2>Theme</h2>
      <p>With our Theme provider you can easely switch between system, dark or light themes.</p>

      <div className="button-group">
        <button className="dispatch-button" onClick={() => toggleColorScheme()}>
          Change theme to: {opositeTheme}
        </button>
      </div>
    </>
  );
}
