#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <Analytics/SEGAnalytics.h>
#import <Analytics/SEGAnalyticsConfiguration.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  SEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"9VFtsZT76zNcSPgJViROIgiTssjco8zW"];

   // Use launchOptions to track tapped notifications
   configuration.launchOptions = launchOptions;
   [SEGAnalytics setupWithConfiguration:configuration];

   if ([[UIApplication sharedApplication] respondsToSelector:@selector(registerForRemoteNotifications)]) {
     UIUserNotificationType types = UIUserNotificationTypeAlert | UIUserNotificationTypeSound |
     UIUserNotificationTypeBadge;
     UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:types
     categories:nil];
     [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
     [[UIApplication sharedApplication] registerForRemoteNotifications];
   } else {
     UIRemoteNotificationType types = UIRemoteNotificationTypeAlert | UIRemoteNotificationTypeSound |
     UIRemoteNotificationTypeBadge;
     [[UIApplication sharedApplication] registerForRemoteNotificationTypes:types];
   }
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
   RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                    moduleName:@"reactNativeTest"
                                             initialProperties:nil];

   if (@available(iOS 13.0, *)) {
       rootView.backgroundColor = [UIColor systemBackgroundColor];
   } else {
       rootView.backgroundColor = [UIColor whiteColor];
   }

   self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
   UIViewController *rootViewController = [UIViewController new];
   rootViewController.view = rootView;
   self.window.rootViewController = rootViewController;
   [self.window makeKeyAndVisible];
   return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
