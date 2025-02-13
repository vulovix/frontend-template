import { useThemeActions } from 'providers/Theme/slice';
import { useDetectTheme } from 'providers/Theme/useDetectTheme';
import { useDispatch } from 'libs/slice';

export default function ThemeBody(): JSX.Element {
  const actions = useThemeActions();
  const dispatch = useDispatch();
  const { opositeTheme } = useDetectTheme();

  return (
    <>
      <h2>Theme</h2>
      <p>With our Theme provider you can easely switch between system, dark or light themes.</p>

      <div className="button-group">
        <button className="dispatch-button" onClick={() => dispatch(actions.changeTheme(opositeTheme))}>
          Change theme to: {opositeTheme}
        </button>
      </div>
    </>
  );
}
