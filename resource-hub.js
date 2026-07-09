/* SimplyPMG.pro Resource Hub - logic + data
   v1.2 - self-contained, no dependencies. Host this file and
   reference it from the Webflow embed snippet. */
(function(){
  const DATA = [
    /* hidden until ready
    { 
    "id": "become-a-partner",
    "label": "Becoming a Partner",
    "icon": "🤝",
    "badge": null,
    "lede": "Become a Wholesale Partner — SimplyPMG.pro is your one-stop resource hub for broker onboarding, training, and support.",
    "total": 1,
    "subcategories": [
      {
        "id": "guides",
        "label": "Guides",
        "count": 1,
        "items": [
          {
            "id": "0",
            "name": "TBD",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      }
    ]
  }, */
  {
    "id": "eep",
    "label": "Earned Equity Program (EEP)",
    "icon": "★",
    "badge": null,
    "lede": "PMG's exclusive Earned Equity Program — everything brokers need to position, originate, and close EEP loans.",
    "total": 10,
    "subcategories": [
      {
        "id": "guides",
        "label": "Guides",
        "count": 6,
        "items": [
          {
            "id": "11800224816",
            "name": "Borrower Paid vs Lender Paid? - Guide",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800250131",
            "name": "DPA Steps to Register/Lock",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800998925",
            "name": "Earned Equity Program - Overview",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800233011",
            "name": "EEP Appraisal Ordering",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800217794",
            "name": "EEP Submission Overview",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800222093",
            "name": "Entity Job Aid / Phase 2",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          }
        ]
      },
 
      {
        "id": "documents",
        "label": "Documents",
        "count": 3,
        "items": [
          {
            "id": "11800248531",
            "name": "EEP HOI Request Checklist",
            "type": "Form",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800243498",
            "name": "EEP Pre-Approval Checklist",
            "type": "Checklist",
            "status": "coming",
            "monday": "#"
          },
          {
            "id": "11800234132",
            "name": "EEP Self Employment Calculator",
            "type": "Guide",
            "status": "coming",
            "monday": "#"
          }
        ]
      },

      {
        "id": "faq",
        "label": "FAQ",
        "count": 1,
        "items": [
          {
            "id": "11800222278",
            "name": "EEP Frequently Asked Questions FAQ",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      },
    ]
  },
  {
    "id": "program-matrices",
    "label": "Program Matrices",
    "icon": "📊",
    "badge": null,
    "lede": "Eligibility matrices for every PMG loan program. Downloadable PDFs, updated monthly.",
    "total": 8,
    "subcategories": [
      {
        "id": "conventional",
        "label": "Conventional Products",
        "count": 3,
        "items": [
          {
            "id": "11800269533",
            "name": "Conventional Conforming Fixed Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1cd3b40f3bd4b284f5a7_SimplyPMG%20-%20Conventional%20Program%20Matrix%2005.05.26.pdf",
            "filename": "SimplyPMG - Conventional Conforming Fixed Program Matrix 05.05.26"
          },
          {
            "id": "11885297753",
            "name": "Fannie Mae HomeReady® Mortgage Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1ceee39ec6cf7d75daf9_SimplyPMG%20-%20FNMA%20Conventional%20HomeReady%2005.05.26.pdf"
          },
          {
            "id": "11885375151",
            "name": "Freddie Mac Home Possible® Mortgage",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1d074ea95b8abd27ed58_SimplyPMG%20-%20Freddie%20Mac%20Conventional%20HomePossible%20Matrix%2005.05.26.pdf"
          }
        ]
      },
      {
        "id": "government",
        "label": "Government Products",
        "count": 3,
        "items": [
          {
            "id": "11800968248",
            "name": "FHA Eligibility Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1d5ab2b7a3f5dffa3ce1_SimplyPMG%20-%20FHA%20Program%20Matrix%2005.05.26.pdf"
          },
          {
            "id": "11801004580",
            "name": "USDA Eligibility Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1d9252598565db91e4af_SimplyPMG%20-%20USDA%20Program%20Matrix%2005.05.26.pdf"
          },
          {
            "id": "11800989724",
            "name": "VA Eligibility Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1d7c6ed6082b569e4bbe_SimplyPMG%20-%20VA%20Program%20Matrix%2005.05.26.pdf"
          }
        ]
      },
      {
        "id": "specialty",
        "label": "Specialty Products",
        "count": 2,
        "items": [
          {
            "id": "11801125396",
            "name": "EEP Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1db727a6e0f0b063cd98_SimplyPMG%20-%20Earned%20Equity%20Program%20Matrix%2005.05.26.pdf"
          },
          {
            "id": "12026614264",
            "name": "Simply DPA Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a21c6588306a43ee966b94f_SimplyPMG%20%20Simply%20DPA%20Program%20Matrix%2005.11.26.pdf"
          }
        ]
      },
      /*{
        "id": "eep-cross-listed",
        "label": "EEP (cross-listed)",
        "count": 1,
        "items": [
          {
            "id": "11801125396",
            "name": "EEP Matrix",
            "type": "Matrix",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/69fd1db727a6e0f0b063cd98_SimplyPMG%20-%20Earned%20Equity%20Program%20Matrix%2005.05.26.pdf"
          }
        ]
      }*/
    ]
  },
    {
    "id": "guides-how-tos",
    "label": "Guides & How-To's",
    "icon": "📖",
    "badge": null,
    "lede": "Step-by-step walkthroughs for every stage of the loan workflow.",
    "total": 2,
    "subcategories": [
      {
        "id": "submission",
        "label": "Submission",
        "count": 2,
        "items": [
          {
            "id": "11801049767",
            "name": "Ordering Appraisals - Guide",
            "type": "Guide",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d2f0a090520b25891d539_SimplyPMG.pro%20Ordering%20Appraisals%20-%20Guide%20v1.3.pdf"
          },
          {
            "id": "11801054275",
            "name": "DPA Stacking with FHA or Conventional Loans - Guide",
            "type": "Guide",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d2f6771ce22d09bcce8c3_SimplyPMG.pro%20DPA%20Stacking%20with%20FHA%20or%20Conventional%20Loans%20-%20Guide%20v1.pdf"
          },
        ]
      }/*,
      {
        "id": "lock-pricing",
        "label": "Lock & Pricing",
        "count": 1,
        "items": [
          {
            "id": "0",
            "name": "TBP",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      },
      {
        "id": "underwriting",
        "label": "Underwriting",
        "count": 1,
        "items": [
          {
            "id": "0",
            "name": "TBP",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      },
      {
        "id": "closing-funding",
        "label": "Closing & Funding",
        "count": 1,
        "items": [
          {
            "id": "0",
            "name": "TBP",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      },
      {
        "id": "system-tools",
        "label": "System Tools",
        "count": 1,
        "items": [
          {
            "id": "0",
            "name": "TBP",
            "type": "Document",
            "status": "coming",
            "monday": "#"
          }
        ]
      }*/
    ]
  },
  {
    "id": "documents",
    "label": "Documents",
    "icon": "📄",
    "badge": null,
    "lede": "Forms, checklists, and templates — everything brokers need to submit and process a loan.",
    "total": 19,
    "subcategories": [
      {
        "id": "checklists",
        "label": "Checklists",
        "count": 1,
        "items": [
          {
            "id": "11801036646",
            "name": "Wholesale Loan Submission Form & Checklist",
            "type": "Checklist",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d41129bf1c02288035be5_SimplyPMG.pro%20Wholesale%20Loan%20Submission%20Form%20%26%20Checklist%20v1.pdf"
          }
        ]
      },
      {
        "id": "submission-forms",
        "label": "Submission Forms",
        "count": 4,
        "items": [
          {
            "id": "11801113360",
            "name": "Conventional UW Submission Form & Checklist",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d468a1e1851208f30d258_SimplyPMG.pro%20Conventional%20UW%20Submission%20Form%20%26%20Checklist%20v1.pdf"
          },
          {
            "id": "11801105235",
            "name": "Doc Request Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d46e462005b3eda98ef56_SimplyPMG.pro%20Doc%20Request%20Form%20%20v1.pdf"
          },
          {
            "id": "11801158040",
            "name": "FHA UW Loan Submission Form & Checklist",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d474b4a71e3459cce9608_SimplyPMG.pro%20FHA%20UW%20Loan%20Submission%20Form%20%26%20Checklist%20v1.pdf"
          },
          {
            "id": "11801106528",
            "name": "VA UW Loan Submission Form & Checklist",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4d477fc04d93e8337c92c7_SimplyPMG.pro%20VA%20UW%20Loan%20Submission%20Form%20%26%20Checklist%20v1.pdf"
          }
        ]
      },
      {
        "id": "disclosure-forms",
        "label": "Disclosure Forms",
        "count": 6,
        "items": [
          {
            "id": "11801110857",
            "name": "Anti-Steering Loan Options Disclosure Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457280e8caf3c1e2d5d382_SimplyPMG.pro%20Anti-Steering%20Loan%20Options%20Disclosure%20Form%20v1.pdf"
          },
         {
            "id": "11801157761",
            "name": "Government Agency Approval Numbers",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4575211311703db968ff86_SimplyPMG.pro%20Government%20Agency%20Approval%20Numbers%20v1.pdf"
          },
          {
            "id": "11801157637",
            "name": "Initial Closing Disclosure Request Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4575fa033b523a7bf655ca_SimplyPMG.pro%20Initial%20Closing%20Disclosure%20Request%20Form%20v1.pdf"
          },
          {
            "id": "11801157471",
            "name": "Lender Disclosure Request Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457674304ef8d3be2a3994_SimplyPMG.pro%20Lender%20Disclosure%20Request%20Form%20v1.pdf"
          },
          {
            "id": "11801107814",
            "name": "Mortgage Broker Fee Agreement Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a45772e40be8fce64edb076_SimplyPMG.pro%20Mortgage%20Broker%20Fee%20Agreement%20Form%20v1.pdf"
          },
          {
            "id": "11801092545",
            "name": "Re-Disclosure Change of Circumstance Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457791a197dc74b49f5b97_SimplyPMG.pro%20Re-Disclosure%20Change%20of%20Circumstance%20Form%20v1.pdf"
          }
        ]
      },
      {
        "id": "borrower-forms",
        "label": "Borrower Forms",
        "count": 7,
        "items": [
          {
            "id": "11801157644",
            "name": "Condominium Project Questionnaire Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a45787e4be8888d3fa33ee5_SimplyPMG.pro%20Condominium%20Project%20Questionnaire%20Form%20v1.pdf"
          },
          {
            "id": "11801110907",
            "name": "Extended Fraud Victim Alert Certification Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457ba23414f31e71a581e3_SimplyPMG.pro%20Extended%20Fraud%20Victim%20Alert%20Certification%20Form%20v1.pdf"
          },
          {
            "id": "11801092802",
            "name": "Gift Letter Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457e9231af243f6cfe41d1_SimplyPMG.pro%20Gift%20Letter%20Form%20v1.pdf"
          },{
            "id": "11801131251",
            "name": "Power of Attorney Borrower Certification Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457f3abc5c2b6c3251a6c2_SimplyPMG.pro%20Power%20of%20Attorney%20Borrower%20Certification%20Form%20v1.pdf"
          },
          {
            "id": "11801105887",
            "name": "SSA-89 SSN Verification Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a457ff3b8b69ce119f74d3d_SimplyPMG.pro%20SSA-89%20SSN%20Verification%20Form%20v1.pdf"
          },
          {
            "id": "11801103930",
            "name": "VA Nearest Living Relative Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a45806ee986be7b9253491e_SimplyPMG.pro%20VA%20Nearest%20Living%20Relative%20Form%20v1.pdf"
          },
          {
            "id": "11801158025",
            "name": "Request for Verification of Rent Form",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a458103b8b69ce119f7a0d1_SimplyPMG.pro%20Request%20for%20Verification%20of%20Rent%20Form%20v1.pdf"
          }
        ]
      },
      {
        "id": "other-forms",
        "label": "Other Forms",
        "count": 1,
        "items": [
          {
            "id": "11801085042",
            "name": "Mortgagee/Loss Payee Clause",
            "type": "Form",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4581c08adc74294794d218_SimplyPMG.pro%20Mortgagee%20Loss%20Payee%20Clause%20v1.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "policies-reference",
    "label": "Policies & Reference",
    "icon": "⚖️",
    "badge": null,
    "lede": "Rules, overlays, limits, and reference info that govern how PMG underwrites and closes.",
    "total": 4,
    "subcategories": [
      /*{
        "id": "pricing-lock",
        "label": "Pricing & Lock",
        "count": 3,
        "items": [
          {
            "id": "11801023967",
            "name": "Loan Level Price Adjusters (LLPAs) Guide",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801023967"
          },
          {
            "id": "11801030067",
            "name": "Lock Confirmation Process",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801030067"
          },
          {
            "id": "11801038550",
            "name": "Expired Lock Policy",
            "type": "Policy",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801038550"
          }
        ]
      },
      {
        "id": "overlays",
        "label": "Overlays",
        "count": 4,
        "items": [
          {
            "id": "11800993405",
            "name": "Conventional Overlays",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800993405"
          },
          {
            "id": "11800954880",
            "name": "FHA Overlays",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800954880"
          },
          {
            "id": "11801007777",
            "name": "VA Overlays",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801007777"
          },
          {
            "id": "11800990422",
            "name": "USDA Overlays",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800990422"
          }
        ]
      }, */ 
      {
        "id": "underwriting-reference",
        "label": "Underwriting (incl Overlays)",
        "count": 4,
        "items": [
          {
            "id": "11800993405",
            "name": "Conventional Loans Overlays",
            "type": "Reference",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4c27a49c428a94b4950cd7_SimplyPMG.pro%20%20Conventional%20Loans%20Overlays%20v1.pdf"
          },
          {
            "id": "11800990001",
            "name": "FHA Case Number & CAIVRS - Guide",
            "type": "Guide",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4c283dddf6c6100af59a18_SimplyPMG.pro%20FHA%20Case%20Number%20%26%20CAIVRS%20-%20Guide%20v1.pdf"
          },
          {
            "id": "11800954880",
            "name": "FHA Overlays",
            "type": "Reference",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4c28982caac114457dcb32_SimplyPMG.pro%20FHA%20Overlays%20v1.pdf"
          },
          {
            "id": "11801053469",
            "name": "VA Overlays",
            "type": "Reference",
            "status": "available",
            "monday": "https://cdn.prod.website-files.com/67c8baa0074bec6e6b3d7b29/6a4c28fa5239218b1a632d3c_SimplyPMG.pro%20VA%20Overlays%20v1.pdf"
          }
        ]
      }/*,
      {
        "id": "closing-reference",
        "label": "Closing Reference",
        "count": 5,
        "items": [
          {
            "id": "11801082563",
            "name": "Wire Instructions & Funding",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801082563"
          },
          {
            "id": "11801086950",
            "name": "Same-Day Funding Cutoff Times",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801086950"
          },
          {
            "id": "11801049709",
            "name": "Initial Disclosure Package",
            "type": "Reference",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801049709"
          },
          {
            "id": "11801109471",
            "name": "CD Issuance & Timing Rules",
            "type": "Reference",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801109471"
          },
          {
            "id": "11801081059",
            "name": "Broker Compensation & Fee Disclosure",
            "type": "Reference",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801081059"
          }
        ]
      }*/
    ]
  },
  /*{
    "id": "faq",
    "label": "FAQ",
    "icon": "❓",
    "badge": null,
    "lede": "Quick answers to the questions brokers ask most.",
    "total": 1,
    "subcategories": [
      {
        "id": "common-issues",
        "label": "Common Issues",
        "count": 1,
        "items": [
          {
            "id": "11801080629",
            "name": "Common Suspense Reasons & Fixes",
            "type": "FAQ",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801080629"
          }
        ]
      }
    ]
  },
  {
    "id": "compliance",
    "label": "Compliance",
    "icon": "✓",
    "badge": null,
    "lede": "Become an approved PMG broker — applications, agreements, and account setup.",
    "total": 6,
    "subcategories": [
      {
        "id": "become-an-approved-broker",
        "label": "Become an Approved Broker",
        "count": 3,
        "items": [
          {
            "id": "11800244527",
            "name": "How to Become an Approved Broker",
            "type": "Webpage",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800244527"
          },
          {
            "id": "11800273341",
            "name": "Submit Your Broker Application",
            "type": "Webpage",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800273341"
          },
          {
            "id": "11800251009",
            "name": "Required Documents Checklist",
            "type": "Checklist",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800251009"
          }
        ]
      },
      {
        "id": "agreements-disclosures",
        "label": "Agreements & Disclosures",
        "count": 2,
        "items": [
          {
            "id": "11800244271",
            "name": "Broker Agreement & Disclosures",
            "type": "Document",
            "status": "updating",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800244271"
          },
          {
            "id": "11801078185",
            "name": "Title Company Requirements",
            "type": "Reference",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11801078185"
          }
        ]
      },
      {
        "id": "account-setup",
        "label": "Account Setup",
        "count": 1,
        "items": [
          {
            "id": "11800269579",
            "name": "Setting Up Your Team & User Access",
            "type": "How-To Guide",
            "status": "coming",
            "monday": "https://pmgllc.monday.com/boards/18409470276/pulses/11800269579"
          }
        ]
      }
    ]
  }*/
];
  const STATUS = {
    available:{label:'Available',cta:'↓ Download'},
    updating: {label:'Updating', cta:'↓ Download'},
    coming:   {label:'Coming Soon',cta:'Preview'}
  };
  const ROOT = document.getElementById('resource-hub-component');
  if(!ROOT){return;}
  const rail = ROOT.querySelector('.catlist-rail');
  const panel = ROOT.querySelector('.catlist-panel');
  function esc(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
  function triggerDownload(url,filename){
    if(!url || url==='#') return;
    const safeName = String(filename || 'download').trim() || 'download';
    const link = document.createElement('a');
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    const finishDownload = (href)=>{
      link.href = href;
      link.download = safeName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    };
    if(window.fetch){
      fetch(url, { mode: 'cors' })
        .then(res=>{
          if(!res.ok) throw new Error('Network response was not ok');
          return res.blob();
        })
        .then(blob=>{
          const objectUrl = URL.createObjectURL(blob);
          finishDownload(objectUrl);
          setTimeout(()=>URL.revokeObjectURL(objectUrl), 1000);
        })
        .catch(()=>finishDownload(url));
    } else {
      finishDownload(url);
    }
  }
  function render(){
    DATA.forEach((cat,idx)=>{
      const isFirst = idx===0;
      const btn = document.createElement('button');
      btn.className='cat-btn';
      btn.setAttribute('role','tab');
      btn.id='tab-'+cat.id;
      btn.setAttribute('aria-controls','pane-'+cat.id);
      btn.setAttribute('aria-selected',isFirst?'true':'false');
      btn.tabIndex = isFirst?0:-1;
      btn.dataset.cat = cat.id;
      btn.innerHTML = `<span class="cat-icon" aria-hidden="true">${cat.icon}</span><span class="cat-label-wrap"><span class="cat-label">${esc(cat.label)}${cat.badge?'<span class="cat-badge">'+cat.badge+'</span>':''}</span><span class="cat-count">${cat.total} item${cat.total===1?'':'s'}</span></span>`;
      rail.appendChild(btn);
    });
    DATA.forEach((cat,idx)=>{
      const pane = document.createElement('section');
      pane.className='panel-pane';
      pane.id='pane-'+cat.id;
      pane.setAttribute('role','tabpanel');
      pane.setAttribute('aria-labelledby','tab-'+cat.id);
      pane.dataset.cat = cat.id;
      if(idx!==0) pane.hidden = true;
      const subAccordion = cat.subcategories.map(sub=>{
        const items = sub.items.map(item=>`<li class="resource-item" data-item-name="${esc(item.name).toLowerCase()}"><div class="resource-meta"><p class="resource-title">${esc(item.name)}</p><div class="resource-tags"><span class="badge badge-type">${esc(item.type)}</span><span class="badge badge-status ${item.status}">${STATUS[item.status].label}</span></div></div><a href="${item.monday}" class="resource-action ${item.status==='coming'?'coming':''}" data-download-url="${esc(item.monday)}" data-filename="${esc(item.filename || item.name || 'download')}.pdf">${STATUS[item.status].cta}</a></li>`).join('');
        return `<article class="sub-item" id="${cat.id}--${sub.id}"><button class="sub-header" aria-expanded="false" aria-controls="sp-${cat.id}-${sub.id}"><div class="sub-title-wrap"><h3 class="sub-title">${esc(sub.label)}</h3><span class="sub-count">${sub.count} item${sub.count===1?'':'s'}</span></div><span class="sub-chev" aria-hidden="true">▼</span></button><div class="sub-panel" id="sp-${cat.id}-${sub.id}" role="region"><div class="sub-panel-inner">${sub.count===0?'<div class="empty-state">No resources yet.</div>':`<ul class="resource-list">${items}</ul>`}</div></div></article>`;
      }).join('');
      pane.innerHTML = `<header class="panel-header"><span class="cat-icon" aria-hidden="true">${cat.icon}</span><div><h2>${esc(cat.label)}</h2><p class="lede">${esc(cat.lede)}</p></div></header><div class="panel-toolbar"><div class="search-box"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="search" placeholder="Search ${esc(cat.label.toLowerCase())}…" data-search="${cat.id}" aria-label="Search ${esc(cat.label)}"></div><div class="status-legend"><span><span class="legend-dot" style="background:var(--status-available)"></span>Available</span><span><span class="legend-dot" style="background:var(--status-updating)"></span>Updating</span><span><span class="legend-dot" style="background:var(--status-coming)"></span>Coming Soon</span></div></div><div class="sub-accordion">${subAccordion}</div>`;
      panel.appendChild(pane);
    });
    bind();
    applyHash();
  }
  function selectCat(catId,scroll){
    ROOT.querySelectorAll('.cat-btn').forEach(t=>{const me = t.dataset.cat===catId; t.setAttribute('aria-selected',me?'true':'false'); t.tabIndex = me?0:-1;});
    ROOT.querySelectorAll('.panel-pane').forEach(p=>{p.hidden = p.dataset.cat!==catId;});
    if(scroll){const w = ROOT; if(w) w.scrollIntoView({behavior:'smooth',block:'start'});}
  }
  function toggleSub(item,force){
    const btn = item.querySelector('.sub-header');
    const willOpen = force!==undefined?force:!item.classList.contains('is-open');
    if(window.innerWidth<720 && willOpen){ROOT.querySelectorAll('.sub-item.is-open').forEach(i=>{i.classList.remove('is-open');i.querySelector('.sub-header').setAttribute('aria-expanded','false');});}
    item.classList.toggle('is-open',willOpen);
    btn.setAttribute('aria-expanded',willOpen?'true':'false');
  }
  function bind(){
    ROOT.addEventListener('click',e=>{
      const link = e.target.closest('a.resource-action');
      if(!link || link.classList.contains('coming')) return;
      const url = link.dataset.downloadUrl;
      const filename = link.dataset.filename || 'download.pdf';
      if(url && url!=='#'){e.preventDefault(); triggerDownload(url, filename);}
    });
    ROOT.querySelectorAll('.cat-btn').forEach(t=>{t.addEventListener('click',()=>{selectCat(t.dataset.cat);history.replaceState(null,'','#'+t.dataset.cat);});});
    ROOT.querySelectorAll('.sub-item').forEach(item=>{item.querySelector('.sub-header').addEventListener('click',()=>toggleSub(item));});
    rail.addEventListener('keydown',e=>{
      const tabs = Array.from(ROOT.querySelectorAll('.cat-btn'));
      const idx = tabs.indexOf(document.activeElement);
      if(idx<0) return;
      let next=-1;
      if(e.key==='ArrowDown'||e.key==='ArrowRight') next=(idx+1)%tabs.length;
      else if(e.key==='ArrowUp'||e.key==='ArrowLeft') next=(idx-1+tabs.length)%tabs.length;
      else if(e.key==='Home') next=0;
      else if(e.key==='End') next=tabs.length-1;
      if(next>=0){e.preventDefault();tabs[next].focus();selectCat(tabs[next].dataset.cat);history.replaceState(null,'','#'+tabs[next].dataset.cat);}
    });
    ROOT.querySelectorAll('input[data-search]').forEach(inp=>{
      inp.addEventListener('input',e=>{
        const q = e.target.value.trim().toLowerCase();
        const pane = e.target.closest('.panel-pane');
        pane.querySelectorAll('.sub-item').forEach(subItem=>{
          const items = subItem.querySelectorAll('.resource-item');
          let shown = 0;
          items.forEach(it=>{const match = !q || it.dataset.itemName.includes(q); it.style.display = match?'':'none'; if(match) shown++;});
          subItem.style.display = (q && shown===0)?'none':'';
          if(q) toggleSub(subItem,true);
        });
      });
    });
  }
  function applyHash(){
    const raw = window.location.hash.replace('#','');
    if(!raw) return;
    const [cat,sub] = raw.split('/');
    if(DATA.find(c=>c.id===cat)){
      selectCat(cat,true);
      if(sub){const item = document.getElementById(cat+'--'+sub); if(item){setTimeout(()=>{toggleSub(item,true);item.scrollIntoView({behavior:'smooth',block:'start'});},200);}}
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render);
  else render();
})();
