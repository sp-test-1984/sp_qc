package sp;

import org.opencv.core.Mat;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Key;
import org.sikuli.script.Match;
import org.sikuli.script.Screen;
import sp.util.Images;
import sp.util.TestConf;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;

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

    public static boolean isLogged(){
        boolean isLogged;
        try {
            SCREEN.find(Images.ACCOUNT);
            isLogged = true;
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
            isLogged = false;
        }
        return isLogged;
    }

    public static void launchPreferences(){
        SCREEN.type(",", Key.META);
    }

    public static void selectIkev2(){
        try {
            SCREEN.click(Images.PROTOCOL_SELECTOR);
            SCREEN.click(Images.IKEV2);
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
        closePreferences();
    }

    public static void selectIpsec(){
        try {
            SCREEN.click(Images.PROTOCOL_SELECTOR);
            Thread.sleep(3000);
            Iterator<Match> all = SCREEN.findAll(Images.IPSEC);
            Match el = null;
            while (all.hasNext()){
                el = all.next();

                if (el.getScore() > 0.98){
                    el.click();
                }

                System.out.println(el.getScore());
            }
        } catch (FindFailed | InterruptedException findFailed) {
            findFailed.printStackTrace();
        }
        closePreferences();
    }

    private static void closePreferences(){
        try {
            SCREEN.click(Images.CLOSE_PREFERENCES);
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
    }
}
