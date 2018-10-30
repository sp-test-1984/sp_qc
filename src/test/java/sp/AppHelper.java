package sp;

import org.sikuli.script.FindFailed;
import org.sikuli.script.Screen;
import sp.util.Images;
import sp.util.TestConf;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public class AppHelper {

    private static final Screen SCREEN = new Screen();

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

    public static void login(){
        try {
            SCREEN.type(Images.USER, TestConf.getTestConf().getIpvUser());
            SCREEN.type(Images.PASSWORD, TestConf.getTestConf().getIpvPassword());
            SCREEN.click(Images.LOGIN);
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
    }

    public static void tearDown(){
        try{
            SCREEN.click(Images.ACCOUNT);
            SCREEN.click(Images.LOGOUT);
            SCREEN.click(Images.CONFIRM_LOGOUT);
        } catch (FindFailed findFailed){
            findFailed.printStackTrace();
        }
    }
}
