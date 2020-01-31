export const data = [
    {
        "moduleId": 0,
        "icon": "fa-home",
        "name": "Home",
        "menuId": "HOME",
        "url": "main.dashboard",
        "subModules": [],
        "subModulesApps": null
    },
    {
        "moduleId": 1,
        "icon": "fa-file-invoice-dollar",
        "name": "Direct Tax",
        "menuId": "INCOME_TAX",
        "url": null,
        "subModules": [
            {
                "name": "US",
                "menuId": "US",
                "icon": "",
                "groupId": 1,
                "url": null,
                "subModules": [
                    {
                        "name": "Federal",
                        "menuId": "FEDERAL",
                        "url": "",
                        "icon": "",
                        "applicationId": "",
                        "moduleId": 1,
                        "groupId": 1,
                        "subModules": [
                            {
                                "name": "OS Feed",
                                "menuId": "OS_FEDRL",
                                "url": "",
                                "icon": "",
                                "applicationId": "OS",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Import",
                                        "menuId": "OS_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "OS_DATAMNG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Process",
                                        "menuId": "OS_PROCESS",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "OS_BUSSOFF",
                                        "url": "main.businessSignOff",
                                        "icon": "fa-handshake",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "OS_REPORT",
                                        "url": "main.reports",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "OS_AUD_TRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "OS",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Cash Tax ",
                                "menuId": "CT_FEDRL",
                                "url": "",
                                "icon": "",
                                "applicationId": "CTAX",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Import",
                                        "menuId": "CT_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "CTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "CT_DATAMNG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "CTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Process",
                                        "menuId": "CT_PROCESS",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "CTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "CT_BUSSOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-handshake",
                                        "groupId": 1,
                                        "applicationId": "CTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "CT_AUD_TRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "CTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Discrete Tax Activity",
                                "menuId": "DT_FEDRL",
                                "url": "",
                                "icon": "",
                                "applicationId": "DTAX",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Import",
                                        "menuId": "DT_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "DT_DATAMNG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Process",
                                        "menuId": "DT_PROCESS",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "DT_BUSSOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-handshake",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "DT_REPORT",
                                        "url": "main.reports",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "DT_AUD_TRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "DTAX",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "ITRA",
                                "menuId": "ITRA",
                                "url": "",
                                "icon": "",
                                "applicationId": "ITRA",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "KPMG",
                                        "menuId": "KPMG",
                                        "url": "main.itraReport",
                                        "icon": "",
                                        "groupId": 1,
                                        "applicationId": "ITRA",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Projects",
                                "menuId": "PRJS",
                                "url": "",
                                "icon": "",
                                "applicationId": "PRJ",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": [
                                    {
                                        "name": "PO Tracker",
                                        "menuId": "PO_TRACKER",
                                        "url": "",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": null,
                                        "subModulesApps": [
                                            {
                                                "name": "Vendor",
                                                "menuId": "PO_VENDOR",
                                                "url": "main.poTracker.vendor",
                                                "icon": "",
                                                "groupId": 1,
                                                "applicationId": "PRJ",
                                                "moduleId": 1,
                                                "subModulesApps": []
                                            },
                                            {
                                                "name": "Project",
                                                "menuId": "PO_PROJECT",
                                                "url": "main.poTracker.project",
                                                "icon": "",
                                                "groupId": 1,
                                                "applicationId": "PRJ",
                                                "moduleId": 1,
                                                "subModulesApps": []
                                            },
                                            {
                                                "name": "Transaction",
                                                "menuId": "PO_TRANSACTION",
                                                "url": "main.poTracker.transaction",
                                                "icon": "",
                                                "groupId": 1,
                                                "applicationId": "PRJ",
                                                "moduleId": 1,
                                                "subModulesApps": []
                                            },
                                            {
                                                "name": "Reports",
                                                "menuId": "PO_REPORTS",
                                                "url": "main.poTracker.reportFilter",
                                                "icon": "",
                                                "groupId": 1,
                                                "applicationId": "PRJ",
                                                "moduleId": 1,
                                                "subModulesApps": []
                                            }
                                        ]
                                    },
                                    {
                                        "name": "US Consulting",
                                        "menuId": "US_CONSULT",
                                        "url": "main.external({linkUrl:'http@!!usa0300vm1758!US%20Consulting!Project'})",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "S101 and S201 Report",
                                        "menuId": "S101_S201",
                                        "url": "https://xerox.sharepoint.com/teams/S101_S201/SitePages/Home.aspx",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Cash Tax SP",
                                        "menuId": "CTS",
                                        "url": "https://xerox.sharepoint.com/teams/tax/SitePages/XeroxHome.aspx",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "City Compliance",
                                        "menuId": "CC",
                                        "url": "main.external({linkUrl:'http@!!usa0300vm1758!CTRS'})",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "FX Rates",
                                        "menuId": "FX",
                                        "url": "main.external({linkUrl:'http@!!usa0300vm1758!FX%20Rates'})",
                                        "icon": "",
                                        "applicationId": "PRJ",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "DTXX",
                                        "menuId": "DTXX_FEDRL",
                                        "url": "main.external({linkUrl:'http@!!10.31.210.8!dtxx!Security!SignIn.aspx'})",
                                        "icon": "",
                                        "applicationId": "DTXX",
                                        "moduleId": 1,
                                        "groupId": 1,
                                        "subModules": [],
                                        "subModulesApps": []
                                    }
                                ],
                                "subModulesApps": null
                            }
                        ],
                        "subModulesApps": null
                    },
                    {
                        "name": "International",
                        "menuId": "INTERNATL",
                        "url": "",
                        "icon": "",
                        "applicationId": "",
                        "moduleId": 1,
                        "groupId": 1,
                        "subModules": [
                            {
                                "name": "Royalty",
                                "menuId": "ROY_INTER",
                                "url": "",
                                "icon": "",
                                "applicationId": "ROY",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Process",
                                        "menuId": "ROY_PROCES",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "ROY_BUSOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-signature",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "ROY_REPORT",
                                        "url": "main.reports.reportDashboard",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Import",
                                        "menuId": "ROY_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "ROY_DATAMG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "ROY_AUDTRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "ROY",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Recharges",
                                "menuId": "REC_INTER",
                                "url": "",
                                "icon": "",
                                "applicationId": "REC",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Process",
                                        "menuId": "REC_PROCES",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "REC_BUSOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-signature",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "REC_REPORT",
                                        "url": "main.reports.reportDashboard",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Import",
                                        "menuId": "REC_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "REC_DATAMG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "REC_AUDTRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "REC",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Aggregates",
                                "menuId": "AGG_INTER",
                                "url": "",
                                "icon": "",
                                "applicationId": "AGG",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Process",
                                        "menuId": "AGG_PROCES",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "AGG_BUSOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-signature",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "AGG_REPORT",
                                        "url": "main.reports.reportDashboard",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Import",
                                        "menuId": "AGG_IMPORT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "AGG_DATAMG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "AGG_AUDTRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "AGG",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Subpart F",
                                "menuId": "SUBF_INTER",
                                "url": "",
                                "icon": "",
                                "applicationId": "SUB F",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Process",
                                        "menuId": "SUBF_PROCS",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "SUBF_BUOFF",
                                        "url": "main.businessSignoff",
                                        "icon": "fa-signature",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "SUBF_REPRT",
                                        "url": "main.reports.reportDashboard",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Import",
                                        "menuId": "SUBF_IMPRT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "SUBF_DATMG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "SUBF_AUTRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "SUB F",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "XIEBV E & P",
                                "menuId": "EP_INTER",
                                "url": "",
                                "icon": "",
                                "applicationId": "ENP",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": null,
                                "subModulesApps": [
                                    {
                                        "name": "Process",
                                        "menuId": "EP_PROCS",
                                        "url": "main.process",
                                        "icon": "fa-recycle",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Business Signoff",
                                        "menuId": "EP_BUOFF",
                                        "url": "main.businessSignOff",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Reports",
                                        "menuId": "EP_REPRT",
                                        "url": "main.reports.reportDashboard",
                                        "icon": "fa-file-alt",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Import",
                                        "menuId": "EP_IMPRT",
                                        "url": "main.import",
                                        "icon": "fa-download",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Data Manager",
                                        "menuId": "EP_DATMG",
                                        "url": "main.datamanager",
                                        "icon": "fa-database",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    },
                                    {
                                        "name": "Audit Trail",
                                        "menuId": "EP_AUTRL",
                                        "url": "main.auditTrail",
                                        "icon": "fa-history",
                                        "groupId": 1,
                                        "applicationId": "ENP",
                                        "moduleId": 1,
                                        "subModulesApps": []
                                    }
                                ]
                            },
                            {
                                "name": "Report Archives",
                                "menuId": "ARCH_INTER",
                                "url": "main.reportArchives",
                                "icon": "",
                                "applicationId": "RPT",
                                "moduleId": 1,
                                "groupId": 1,
                                "subModules": [],
                                "subModulesApps": []
                            }
                        ],
                        "subModulesApps": null
                    }
                ],
                "subModulesApps": null
            },
            {
                "name": "Non US",
                "menuId": "NON-US",
                "icon": "",
                "groupId": 2,
                "url": null,
                "subModules": [
                    {
                        "name": "Cash Tax Non US",
                        "menuId": "CT_NON_US",
                        "url": "",
                        "icon": "",
                        "applicationId": "CTAX",
                        "moduleId": 1,
                        "groupId": 2,
                        "subModules": [],
                        "subModulesApps": []
                    },
                    {
                        "name": "Discrete Tax Activity Non US",
                        "menuId": "DT_NON_US",
                        "url": "",
                        "icon": "",
                        "applicationId": "DTAX",
                        "moduleId": 1,
                        "groupId": 2,
                        "subModules": [],
                        "subModulesApps": []
                    }
                ],
                "subModulesApps": null
            },
            {
                "name": "Common Tables/Mapping",
                "menuId": "CMN_DT",
                "icon": "",
                "groupId": 3,
                "url": null,
                "subModules": [
                    {
                        "name": "Process",
                        "menuId": "CMN_PROCS",
                        "url": "main.process",
                        "icon": "fa-recycle",
                        "applicationId": "CMN",
                        "moduleId": 1,
                        "groupId": 3,
                        "subModules": [],
                        "subModulesApps": []
                    },
                    {
                        "name": "Business Signoff",
                        "menuId": "CMN_BUOFF",
                        "url": "main.businessSignoff",
                        "icon": "fa-signature",
                        "applicationId": "CMN",
                        "moduleId": 1,
                        "groupId": 3,
                        "subModules": [],
                        "subModulesApps": []
                    }
                ],
                "subModulesApps": null
            }
        ],
        "subModulesApps": null
    },
    {
        "moduleId": 2,
        "icon": "fa-chart-bar",
        "name": "Reports",
        "menuId": "DATA",
        "url": null,
        "subModules": [
            {
                "name": "1120",
                "menuId": "REPORT_1120",
                "icon": "",
                "groupId": 4,
                "url": null,
                "subModules": [
                    {
                        "name": "US",
                        "menuId": "DRILL_THRU_US",
                        "url": "main.drillThruReports({state:'US'})",
                        "icon": "",
                        "applicationId": "RPT",
                        "moduleId": 2,
                        "groupId": 4,
                        "subModules": [],
                        "subModulesApps": []
                    },
                    {
                        "name": "Texas",
                        "menuId": "DRILL_THRU_TEXAS",
                        "url": "main.drillThruReports({state:'texas'})",
                        "icon": "",
                        "applicationId": "RPT",
                        "moduleId": 2,
                        "groupId": 4,
                        "subModules": [],
                        "subModulesApps": []
                    }
                ],
                "subModulesApps": null
            },
            {
                "name": "Report Archives",
                "menuId": "RPT_ARCH",
                "icon": "",
                "groupId": 5,
                "url": "main.reportArchives",
                "subModules": [],
                "subModulesApps": null
            }
        ],
        "subModulesApps": null
    },
    {
        "moduleId": 3,
        "icon": "fa-calendar",
        "name": "Calendar",
        "menuId": "DASHBOARD",
        "url": "main.calendar",
        "subModules": [],
        "subModulesApps": null
    },
    {
        "moduleId": 4,
        "icon": "fa-user-shield",
        "name": "Admin",
        "menuId": "ADMIN",
        "url": null,
        "subModules": [
            {
                "name": "Assign User",
                "menuId": "ASGN_USER",
                "icon": "",
                "groupId": 6,
                "url": "main.userManagement.userDashboard",
                "subModules": [],
                "subModulesApps": null
            },
            {
                "name": "Closed Tax Year",
                "menuId": "CLSD_TAXYR",
                "icon": "",
                "groupId": 7,
                "url": "main.applicationDataLock",
                "subModules": [],
                "subModulesApps": null
            },
            {
                "name": "Message Centre",
                "menuId": "MSG_CENTER",
                "icon": "",
                "groupId": 8,
                "url": "main.messageCenter",
                "subModules": [],
                "subModulesApps": null
            }
        ],
        "subModulesApps": null
    }
]