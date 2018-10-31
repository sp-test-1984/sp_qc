package sp;

import org.opencv.core.Mat;
import org.sikuli.script.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import sp.util.Images;
import sp.util.TestConf;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;

public class AppHelper {

    private static final Screen SCREEN = new Screen();
    private static final Logger LOG = LoggerFactory.getLogger(AppHelper.class);

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

    public static void selectIkev2() throws InterruptedException {

        clickClosestMatch(Images.PROTOCOL_SELECTOR, 0.90);
        Thread.sleep(3000);
        clickClosestMatch(Images.IKEV2, 0.90);
        Thread.sleep(3000);

    }

    public static void selectIpsec() throws InterruptedException {
        clickClosestMatch(Images.PROTOCOL_SELECTOR, 0.90);
        Thread.sleep(3000);
        clickClosestMatch(Images.IPSEC, 0.90);
        Thread.sleep(3000);
    }

    private static void closePreferences(){
        try {
            SCREEN.click(Images.CLOSE_PREFERENCES);
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
    }

    public static void clickClosestMatch(String target, double proximity){
        try {
            Iterator<Match> all = SCREEN.findAll(target);
            Match element = null;
            while (all.hasNext()){
                element = all.next();
                if(element.getScore() > proximity){
                    element.click();
                }
            }
        } catch (FindFailed findFailed) {
            LOG.error("Along with dark matter and supersymmetry we're having trouble finding that image");
        }
    }
}
