# issue https://github.com/nativescript-community/ui-mapbox/issues/102

# Vue 2 App

- Marker onTap not working on iOS

# Changes

### Podfile
```shell
post_install do |installer|
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings["IPHONEOS_DEPLOYMENT_TARGET"] = "12.0"
      end
    end
  end
```

### build.xcconfig
```shell
EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_simulator__NATIVE_ARCH_64_BIT_x86_64=arm64 arm64e armv7 armv7s armv6 armv8
EXCLUDED_ARCHS=$(inherited) $(EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_$(EFFECTIVE_PLATFORM_SUFFIX)__NATIVE_ARCH_64_BIT_$(NATIVE_ARCH_64_BIT))
EXCLUDED_ARCHS[sdk=iphonesimulator*] = arm64
```
