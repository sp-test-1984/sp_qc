package sp;

import sp.util.TestConf;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public class AppHelper {
    public static boolean isAccessible(){
        boolean canBeAccessed;
        try {
            Desktop.getDesktop().open(new File(TestConf.getTestConf().getApplicationPath()));
            canBeAccessed = true;
        } catch (IOException e) {
            e.printStackTrace();
            canBeAccessed = false;
        }
        return canBeAccessed;
    }
}
