(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "PART-01-Introduction.md",
                title: "Part I: Introduction",
                url: "/PART-01-Introduction.html",
                escapedPath: "PART-01-Introduction.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-02-General-Matters.md",
                title: "Part II: General Matters",
                url: "/PART-02-General-Matters.html",
                escapedPath: "PART-02-General-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-03-Originating-Processes-And-Documents.md",
                title: "Part III: Originating Processes and Documents",
                url: "/PART-03-Originating-Processes-And-Documents.html",
                escapedPath: "PART-03-Originating-Processes-And-Documents.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-03A-Alternative-Dispute-Resolution.md",
                title: "Part IIIA: Alternative Dispute Resolution",
                url: "/PART-03A-Alternative-Dispute-Resolution.html",
                escapedPath: "PART-03A-Alternative-Dispute-Resolution.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-04-Interlocutory-Applications.md",
                title: "Part IV: Interlocutory Applications",
                url: "/PART-04-Interlocutory-Applications.html",
                escapedPath: "PART-04-Interlocutory-Applications.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md",
                title: "Part V: Discovery and Inspection of Electronically Stored Documents",
                url: "/PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.html",
                escapedPath: "PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md",
                title: "Part VI: Evidence - Witnesses, Affidavits and Exhibits",
                url: "/PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.html",
                escapedPath: "PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-07-Fixing-Of-Matters-For-Hearing.md",
                title: "Part VII: Fixing of Matters for Hearing",
                url: "/PART-07-Fixing-Of-Matters-For-Hearing.html",
                escapedPath: "PART-07-Fixing-Of-Matters-For-Hearing.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-08-Documents-And-Authorities-For-Use-In-Court.md",
                title: "Part VIII: Documents and Authorities For Use In Court",
                url: "/PART-08-Documents-And-Authorities-For-Use-In-Court.html",
                escapedPath: "PART-08-Documents-And-Authorities-For-Use-In-Court.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-09-Judgments-And-Orders.md",
                title: "Part IX: Judgments and Orders",
                url: "/PART-09-Judgments-And-Orders.html",
                escapedPath: "PART-09-Judgments-And-Orders.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-10-Enforcement-Of-Judgments-And-Orders.md",
                title: "Part X: Enforcement of Judgments and Orders",
                url: "/PART-10-Enforcement-Of-Judgments-And-Orders.html",
                escapedPath: "PART-10-Enforcement-Of-Judgments-And-Orders.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md",
                title: "Part XI: Appeals and Hearings Before Court of 3 Judges",
                url: "/PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.html",
                escapedPath: "PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-12-Taxation-Matters-And-Costs.md",
                title: "Part XII: Taxation Matters and Costs",
                url: "/PART-12-Taxation-Matters-And-Costs.html",
                escapedPath: "PART-12-Taxation-Matters-And-Costs.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-13-Electronic-Filing-And-Service.md",
                title: "Part XIII: Electronic Filing and Service",
                url: "/PART-13-Electronic-Filing-And-Service.html",
                escapedPath: "PART-13-Electronic-Filing-And-Service.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md",
                title: "Part XIV: Electronic Filing and Service for Criminal Proceedings",
                url: "/PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.html",
                escapedPath: "PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-15-Technology-Facilities.md",
                title: "Part XV: Technology Facilities",
                url: "/PART-15-Technology-Facilities.html",
                escapedPath: "PART-15-Technology-Facilities.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-16-Admiralty-Matters.md",
                title: "Part XVI: Admiralty Matters",
                url: "/PART-16-Admiralty-Matters.html",
                escapedPath: "PART-16-Admiralty-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-17-Adoption-And-Probate-Matters.md",
                title: "Part XVII: Adoption and Probate Matters",
                url: "/PART-17-Adoption-And-Probate-Matters.html",
                escapedPath: "PART-17-Adoption-And-Probate-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-18-Matters-Under-The-Legal-Profession-Act.md",
                title: "Part XVIII: Matters Under The Legal Profession Act 1966",
                url: "/PART-18-Matters-Under-The-Legal-Profession-Act.html",
                escapedPath: "PART-18-Matters-Under-The-Legal-Profession-Act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md",
                title: "Part XIX: Matrimonial Proceedings and Matters Relating To The Guardianship of Infants",
                url: "/PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.html",
                escapedPath: "PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-20-Bankruptcy-And-Winding-Up-Matters.md",
                title: "Part XX: Bankruptcy and Winding Up Matters",
                url: "/PART-20-Bankruptcy-And-Winding-Up-Matters.html",
                escapedPath: "PART-20-Bankruptcy-And-Winding-Up-Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-21-Applications-Under-The-Mental-Capacity-Act.md",
                title: "Part XXI: Applications Under The Mental Capacity Act 2008",
                url: "/PART-21-Applications-Under-The-Mental-Capacity-Act.html",
                escapedPath: "PART-21-Applications-Under-The-Mental-Capacity-Act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md",
                title: "Part XXII: Civil Proceedings That Do Not Use The Electronic Filing Service",
                url: "/PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.html",
                escapedPath: "PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-23-Medical-Negligence-Claims.md",
                title: "Part XXIII: Medical Negligence Claims",
                url: "/PART-23-Medical-Negligence-Claims.html",
                escapedPath: "PART-23-Medical-Negligence-Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md",
                title: "Part XXIV: Reference to Actuarial Tables in Personal Injury and Death Claims",
                url: "/PART-24-Reference%20to%20Actuarial%20Tables%20in%20Personal%20Injury%20and%20Death%20Claims.html",
                escapedPath: "PART-24-Reference%20to%20Actuarial%20Tables%20in%20Personal%20Injury%20and%20Death%20Claims.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "PART-25-Other Matters Specific to Criminal Proceedings.md",
                title: "Part XXV: Other Matters Specific to Criminal Proceedings",
                url: "/PART-25-Other%20Matters%20Specific%20to%20Criminal%20Proceedings.html",
                escapedPath: "PART-25-Other%20Matters%20Specific%20to%20Criminal%20Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "index.md",
                title: "Supreme Court Practice Directions 2013 (To be read with the Rules of Court (Cap. 322, R 5, 2014 Rev Ed)",
                url: "/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        {
                name: "q_Appendices.md",
                title: "Appendices",
                url: "/q_Appendices.html",
                escapedPath: "q_Appendices.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Supreme Court Practice Directions 2013","",["PART-01-Introduction.md","PART-02-General-Matters.md","PART-03-Originating-Processes-And-Documents.md","PART-03A-Alternative-Dispute-Resolution.md","PART-04-Interlocutory-Applications.md","PART-05-Discovery-And-Inspection-Of-Electronically-Stored-Documents.md","PART-06-Evidence--Witnesses-Affidavits-And-Exhibits.md","PART-07-Fixing-Of-Matters-For-Hearing.md","PART-08-Documents-And-Authorities-For-Use-In-Court.md","PART-09-Judgments-And-Orders.md","PART-10-Enforcement-Of-Judgments-And-Orders.md","PART-11-Appeals-And-Hearings-Before-Court-Of-3-Judges.md","PART-12-Taxation-Matters-And-Costs.md","PART-13-Electronic-Filing-And-Service.md","PART-14-Electronic-Filing-And-Service-For-Criminal-Proceedings.md","PART-15-Technology-Facilities.md","PART-16-Admiralty-Matters.md","PART-17-Adoption-And-Probate-Matters.md","PART-18-Matters-Under-The-Legal-Profession-Act.md","PART-19-Matrimonial-Proceedings-And-Matters-Relating-To-The-Guardianship-Of-Infants.md","PART-20-Bankruptcy-And-Winding-Up-Matters.md","PART-21-Applications-Under-The-Mental-Capacity-Act.md","PART-22-Civil-Proceedings-That-Do-Not-Use-The-Electronic-Filing-Service.md","PART-23-Medical-Negligence-Claims.md","PART-24-Reference to Actuarial Tables in Personal Injury and Death Claims.md","PART-25-Other Matters Specific to Criminal Proceedings.md","q_Appendices.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()