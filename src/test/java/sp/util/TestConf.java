package sp.util;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import javax.validation.ConstraintViolation;
import javax.validation.Valid;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.constraints.NotNull;
import java.util.Map;
import java.util.Set;


public class TestConf {

    private static final Config BASE_CONFIG = ConfigFactory.load();
    private static final ObjectMapper MAPPER = buildMapper();
    private static final Validator VALIDATOR = Validation.buildDefaultValidatorFactory().getValidator();
    private static final Logger LOG = LoggerFactory.getLogger(TestConf.class);
    private static final TestConf testConf = buildConfSingleton(BASE_CONFIG);

    @Valid
    @NotNull
    public String ipvUser;

    @Valid
    @NotNull
    public String ipvPassword;

    @NotNull
    public String getIpvUser() {
        return ipvUser;
    }

    @NotNull
    public String getIpvPassword() {
        return ipvPassword;
    }

    public static TestConf getTestConf() {
        return testConf;
    }

    private static ObjectMapper buildMapper(){
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return mapper;
    }

    private static TestConf buildConfSingleton(Config config){
        Map<String, Object> unwrappedConfig = config.root().unwrapped();
        TestConf testConf = MAPPER.convertValue(unwrappedConfig, TestConf.class);
        Set<ConstraintViolation<TestConf>> constraintViolations = VALIDATOR.validate(testConf);
        if(!constraintViolations.isEmpty()){
            StringBuilder message = new StringBuilder();
            message.append(" Config invalid, please correct the following \n ");
            for (ConstraintViolation<TestConf> violation:
                 constraintViolations) {
                message.append(" ");
                message.append(violation.getPropertyPath());
                message.append(" : ");
                message.append(violation.getMessage());
                message.append('\n');
            }
            LOG.error(message.toString());
            throw new IllegalStateException(" config invalid . ");
        }
        return testConf;
    }
}
