﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Resources.Areas.Administration.ProblemGroups {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class ProblemGroupsControllers {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ProblemGroupsControllers() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("OJS.Web.App_GlobalResources.Areas.Administration.ProblemGroups.ProblemGroupsContr" +
                            "ollers", typeof(ProblemGroupsControllers).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The contest is аctive and you cannot add problem groups.
        /// </summary>
        public static string Active_contest_cannot_add_problem_group {
            get {
                return ResourceManager.GetString("Active_contest_cannot_add_problem_group", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The contest is аctive and you cannot delete problem groups.
        /// </summary>
        public static string Active_contest_cannot_delete_problem_group {
            get {
                return ResourceManager.GetString("Active_contest_cannot_delete_problem_group", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to You can create problem groups only in a contest which is of type {0}..
        /// </summary>
        public static string Can_create_only_in_online_contest {
            get {
                return ResourceManager.GetString("Can_create_only_in_online_contest", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to You can edit problem groups order only in a contest which is of type {0}..
        /// </summary>
        public static string Can_edit_orderby_only_in_online_contest {
            get {
                return ResourceManager.GetString("Can_edit_orderby_only_in_online_contest", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The selected contest does not exist.
        /// </summary>
        public static string Contest_does_not_exist {
            get {
                return ResourceManager.GetString("Contest_does_not_exist", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Contest is required.
        /// </summary>
        public static string Contest_required {
            get {
                return ResourceManager.GetString("Contest_required", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Successfully copied all problem groups from the contest &quot;{0}&quot; into the contest &quot;{1}&quot;.
        /// </summary>
        public static string Copy_all_problem_groups_success_message {
            get {
                return ResourceManager.GetString("Copy_all_problem_groups_success_message", resourceCulture);
            }
        }
    }
}
