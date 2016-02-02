/**
 * Jira Widget
 *
 * A simple script to embed multiple Issue Collectors for various brands
 */

// Uncomment below for debugging.
// window.jira_widget_started = false;
// jQuery('#jira_widget').remove();

// Check for jQuery and for the configuration object "jira_widget".
if (typeof window.jQuery != 'undefined' &&
  (typeof window.jira_widget_started != 'boolean' || !window.jira_widget_started)) {

  // Prevent double execution with this flag
  window.jira_widget_started = true;

  // By default we use zopim to communicate with developers, but can be disabled for brands specifically.
  zompim_enabled = true;

  // Location of the widget. Typically on the right, but can be adjusted for brands specifically.
  position = 'bottom_right';

  // Begin jQuery wrapper
  (function ($) {

    // Core def to reduce the size of this script without sacrificing flexibility when it is inevitably needed.
    var is_production = false,
      jira_widget = {};
      def = {
      question: {
        name: 'Ask a Question',
        description: 'Need help? Ask a quick question and have an answer from developers within minutes.',
        color: 'FF8A00'
      },
      bug: {
        name: 'Report a Bug',
        description: 'Found an issue? Report it and developers will be notified immediately.',
        color: 'C90606'
      },
      feature: {
        name: 'Request a Feature',
        description: 'Have an idea of something that should go here? Let the developers know!',
        color: '7FAE0E'
      },
      feedback: {
        name: 'Send Feedback',
        description: 'Have a comment about this page?',
        color: '34AF88'
      },
      jira: {
        name: 'Open Jira',
        description: 'View the ticket tracking system.',
        link: 'https://tuidev.atlassian.net/secure/Dashboard.jspa?selectPageId=10000'
      },
      root_url: 'https://tuidev.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e/en_US-fgteju/6322/80/1.4.11/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?collectorId='
    };

    // Custom configuration based on brand
    switch (window.location.hostname) {
      // Great Atlantic Sports Travel
      case 'www.greatatlanticsports.com':
        is_production = true;
      case 'dev.greatatlanticsports.com':
      case 'stage.greatatlanticsports.com':
      case 'uat.greatatlanticsports.com':
      case 'qa.gast.tuidev.com':
      case 'dev.gast.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + '8e65a5a5',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '3af8a1ad',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '50347b7d',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '578cbed4',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // Brightspark CA
      case 'www.brightsparktravel.ca':
        is_production = true;
      case 'www.brightsparktravel.com':
        is_production = true;
      case 'dev.brightsparktravel.ca':
      case 'stage.brightsparktravel.ca':
      case 'uat.brightsparktravel.ca':
      case 'dev.brightsparktravel.com':
      case 'stage.brightsparktravel.com':
      case 'uat.brightsparktravel.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'f9b08053',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + 'd20d8e17',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '31d9fb24',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + 'a54a04c9',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // Jumpstreet & Educatours (shares project)
      case 'www.jumpstreet.com':
      case 'www.educatours.com':
        is_production = true;
      case 'dev.jumpstreet.com':
      case 'dev.educatours.com':
      case 'stage.jumpstreet.com':
      case 'stage.educatours.com':
      case 'uat.jumpstreet.com':
      case 'uat.educatours.com':
      case 'qa.jumpstreet.tuidev.com':
      case 'qa.educatours.tuidev.com':
      case 'dev.jumpstreet.tuidev.com':
      case 'dev.educatours.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'ae71b701',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '6574728a',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '15143abf',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '1581d15a',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // StudentCity & GradCity (shares project)
      case 'www.studentcity.com':
      case 'www.gradcity.com':
        is_production = true;
      case 'uat.studentcity.com':
      case 'uat.gradcity.com':
      case 'qa.sc.tuidev.com':
      case 'qa.gc.tuidev.com':
      case 'dev.sc.tuidev.com':
      case 'dev.gc.tuidev.com':
      case 'qa.studentcity.tuidev.com':
      case 'qa.gradcity.tuidev.com':
      case 'dev.studentcity.tuidev.com':
      case 'dev.gradcity.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + '026be538',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + 'a05369d1',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '81693d13',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + 'a2fc6633',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // World Class Vacations
      case 'www.wcv.com':
        is_production = true;
      case 'pre.wcv.com':
      case 'dev.wcv.com':
      case 'stage.wcv.com':
      case 'uat.wcv.com':
      case 'qa.wcv.tuidev.com':
      case 'dev.wcv.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + '02f6571a',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + 'f34c3e8a',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '481de704',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + 'fd1f40dd',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // International Expeditions
      case 'www.ietravel.com':
        is_production = true;
      case 'pre.ietravel.com':
      case 'dev.ietravel.com':
      case 'stage.ietravel.com':
      case 'uat.ietravel.com':
      case 'qa.ietravel.tuidev.com':
      case 'dev.ietravel.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + '8ec399a4',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + 'a28ad80a',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + 'a91b7d08',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '7f6715e1',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // Quark Expeditions / Quark Blog
      case 'www.quarkexpeditions.com':
        is_production = true;
      case 'pre.quarkexpeditions.com':
      case 'dev.quarkexpeditions.com':
      case 'stage.quarkexpeditions.com':
      case 'uat.quarkexpeditions.com':
      case 'qa.quark-d7.tuidev.com':
      case 'qa.quark.tuidev.com':
      case 'dev.quark-d7.tuidev.com':
      case 'dev.quark.tuidev.com':
        zompim_enabled = false;
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'a576ab00',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '72adda39',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '7302d123',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '76ea44b4',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // TCS Expeditions
      case 'www.tcsworldtravel.com':
        is_production = true;
      case 'pre.tcsworldtravel.com':
      case 'dev.tcsworldtravel.com':
      case 'stage.tcsworldtravel.com':
      case 'uat.tcsworldtravel.com':
      case 'qa.tcs.tuidev.com':
      case 'dev.tcs.tuidev.com':
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + '232b66ff',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '5c3439a6',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '5977d72b',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + 'e42434b8',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // Travcoa
      case 'www.travcoa.com':
        is_production = true;
      case 'dev.travcoa.com':
      case 'stage.travcoa.com':
      case 'uat.travcoa.com':
      case 'qa.trv.tuidev.com':
      case 'dev.trv.tuidev.com':
        zompim_enabled = false;
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'd986a613',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + 'eed52578',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '699bc020',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '8231f023',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // YMT Vacations
      case 'www.ymtvacations.com':
        is_production = true;
      case 'pre.ymtvacations.com':
      case 'dev.ymtvacations.com':
      case 'stage.ymtvacations.com':
      case 'uat.ymtvacations.com':
      case 'qa.ymt.tuidev.com':
      case 'dev.ymt.tuidev.com':
        zompim_enabled = false;
        position = 'bottom_left';
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'f9d970bb',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '1502dd09',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + 'ab2063eb',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + '4f2620fc',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // Zegrahm
      case 'www.zegrahm.com':
        is_production = true;
      case 'pre.zegrahm.com':
      case 'uat.zegrahm.com':
      case 'stage.zegrahm.com':
      case 'qa.zegrahm.tuidev.com':
      case 'dev.zegrahm.tuidev.com':
      case 'dev.zegrahm.com':
      case 'zeg.dev':
      case 'zeg.vm':
        zompim_enabled = false;
        jira_widget = {
          collectors: [
            {
              name: def.question.name,
              script: def.root_url + 'bac70790',
              description: def.question.description,
              color: def.question.color
            },
            {
              name: def.bug.name,
              script: def.root_url + '7d028dbb',
              description: def.bug.description,
              color: def.bug.color
            },
            {
              name: def.feature.name,
              script: def.root_url + '33f2dcf9',
              description: def.feature.description,
              color: def.feature.color
            },
            {
              name: def.feedback.name,
              script: def.root_url + 'd878a7d0',
              description: def.feedback.description,
              color: def.feedback.color
            },
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
      // All domains not listed above
      default:
        // Assume any other server is "production"
        is_production = true;
        jira_widget = {
          collectors: [
            {
              name: def.jira.name,
              script: '',
              link: def.jira.link,
              description: def.jira.description,
              color: ''
            }
          ]
        };
        break;
    }

    // Basic cookie handling
    $.cookie = function (name, value, lifespan_days) {
      var cookieValue = null;
      if (typeof value != 'undefined') {
        if (value === null) {
          value = '';
        }
        var now = new Date();
        if (typeof lifespan_days == 'undefined'){
          var lifespan_days = 30;
        }
        var time = now.getTime();
        time += lifespan_days * 24 * 60 * 60 * 1000;
        var expires = '; expires=' + time; // For everlasting cookie use 2147483647
        var path = '; path=/';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path].join('')
      } else {
        if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break
            }
          }
        }
      }
      return cookieValue;
    };

    // Wait until the dom is fully loaded
    $(document).ready(function () {

      // By default we will save/create the cookie at the end of this method
      var cookie_found = $.cookie('jira_widget_shown') == 'true';
      var admin_found = $('#admin-menu, #wpadminbar, body.logged-in .toolbar, body.toolbar-drawer .toolbar, #navbar-bar').length;
      var collectors_found = typeof jira_widget != 'undefined' &&
        typeof jira_widget.collectors != 'undefined' &&
        jira_widget.collectors.length;
      var user_ip = $.cookie('jira_widget_ip');

      // Try checking the user's IP range
      var office_found = false;
      if (collectors_found && is_production && !cookie_found && !admin_found && !user_ip){
        $.getJSON('//api.ipify.org?format=jsonp&callback=?', function(data){
          if (data && data.ip){
            // IP has been retrieved
            user_ip = data.ip;
            deploy();
          }
        });
      } else {
        // IP detection is not needed at this time.
        deploy();
      }

      function zopim_deploy() {
        // Include the Zopim chat widget script (almost no modification from original)
        if (typeof window.$zopim == 'undefined') {
          // Start of Zopim Live Chat Script
          (function (d, s) {
            var z = $zopim = function (c) {
              z._.push(c)
            }, $ = z.s =
                d.createElement(s), e = d.getElementsByTagName(s)[0];
            z.set = function (o) {
              z.set._.push(o)
            };
            z._ = [];
            z.set._ = [];
            $.async = !0;
            $.setAttribute('charset', 'utf-8');
            $.src = '//v2.zopim.com/?2mHFXIacgPiqEo2S2C1GJHVeQxRqlPeH';
            z.t = +new Date;
            $.type = 'text/javascript';
            e.parentNode.insertBefore($, e)
          })(document, 'script');
          // End of Zopim Live Chat Script

          $zopim(function () {
            // Push the chat into the corner.
            $zopim.livechat.window.setOffsetHorizontal(0);
            // Hide the button when we are offline.
            $zopim.livechat.button.setHideWhenOffline(true);
            // Hide the button completely
            $zopim.livechat.button.setOffsetHorizontal(100000);
            $zopim.livechat.button.setOffsetHorizontalMobile(100000);
            // Set the button to green when someone is available
            $zopim.livechat.setOnStatus(function (status) {
              if (status == 'online') {
                $('#jira_widget_options #chat.jira_widget_button').css({
                  'background-color': '#7FAE0E',
                  'opacity': 1
                });
              } else {
                $('#jira_widget_options #chat.jira_widget_button').css({
                  'background-color': '#000',
                  'opacity': .3
                });
              }
            });
            // Forcibly open chat if we start one with the brand rep.
            $zopim.livechat.setOnUnreadMsgs(function (number) {
              if (typeof jira_widget.chat_msgs == 'undefined') {
                jira_widget.chat_msgs = number;
              }
              if (typeof jira_widget.chat_msgs != 'undefined' && jira_widget.chat_msgs != number) {
                $zopim.livechat.window.show();
              }
            });
          });
        }
      }

      // Continue deployment after IP test has been made (if required)
      function deploy(){

        // Test the user IP, if provided for a known office.
        if (user_ip){
          // Ref: goo.gl/pMxgI4
          var office_ips = [
            '208.117.32.0',    // EDU
            '208.117.32.1',    // EDU
            '208.117.32.2',    // EDU
            '208.117.32.3',    // EDU
            '208.117.32.4',    // EDU
            '208.117.32.5',    // EDU
            '208.117.32.6',    // EDU
            '208.117.32.7',    // EDU
            '208.117.32.8',    // EDU
            '208.117.32.9',    // EDU
            '208.117.32.10',   // EDU
            '208.117.32.11',   // EDU
            '208.117.32.12',   // EDU
            '208.117.32.13',   // EDU
            '208.117.32.14',   // EDU
            '208.117.32.15',   // EDU
            '208.117.32.16',   // EDU
            '208.117.32.17',   // EDU
            '208.117.32.18',   // EDU
            '208.117.32.19',   // EDU
            '208.117.32.20',   // EDU
            '208.117.32.21',   // EDU
            '208.117.32.22',   // EDU
            '208.117.32.23',   // EDU
            '208.117.32.24',   // EDU
            '66.129.100.131',  // MAR CLW
            '66.195.251.121',  // MAR CLW
            '66.195.251.122',  // MAR CLW
            '66.193.50.2',     // MAR CLW
            '50.78.168.229',   // TCS
            '68.64.32.243',    // ZEG
            '68.64.32.244',    // IET
            '12.252.57.86',    // YMT/TRV
            '68.64.32.242',    // CWD
            // '184.149.28.19'    // QRK
          ];
          if (office_ips.indexOf(user_ip) !== -1){
            office_found = true;
            // If the user is in an office, remember for 7 days.
            $.cookie('jira_widget_ip', user_ip, 7);
          } else {
            // If the user is not in an office, do not check their IP again for 1 day.
            $.cookie('jira_widget_ip', user_ip, 1);
          }
        }

        // Check to see if the user is a Drupal administrator, or if they have been one recently
        if (collectors_found && (cookie_found || admin_found || office_found || !is_production)) {

          // Establish and/or lengthen the cookie lifespan
          $.cookie('jira_widget_shown', 'true');

          // Get the issue collectorId for each collector
          var collectors = jira_widget.collectors,
            regex = new RegExp("collectorId=([A-Za-z0-9]*)", ["i"]),
            jira_hooks = [],
            collectors_markup = '';

          if (zompim_enabled == true) {
            setTimeout(function(){
              zopim_deploy();
            }, 300);

            collectors.unshift(
                {
                  name: 'Chat with a Developer',
                  script: '',
                  link: 'javascript:$zopim.livechat.window.show();',
                  description: 'If a developer is on stand-by to help with quick issues or training you can chat with them directly.',
                  color: ''
                }
            );
          }

          // Loop through collectors, creating markup and jira hooks
          for (var i = 0; i < collectors.length; i++) {

            // Generate the Jira hook for the upcoming button markup if possible
            var matches = regex.exec(collectors[i].script);
            if (matches != null && typeof matches[1] != 'undefined') {
              collectors[i].collectorId = matches[1];
              var button_id = 'jira_widget_button_' + collectors[i].collectorId;
              // Using eval here because Jira doesn't provide a way to target buttons dynamically based on an id of any kind
              jira_hooks[collectors[i].collectorId] = {
                triggerFunction: new Function('showCollectorDialog',
                  '  jQuery("#' + button_id + '").click(function (e) {' +
                    '    e.preventDefault();' +
                    '    showCollectorDialog();' +
                    '  });'
                )
              };
            }

            // Translate name and description if Drupal translation function is available
            if (typeof Drupal != 'undefined' && typeof Drupal.t == 'function'){
              collectors[i].name = Drupal.t(collectors[i].name);
              collectors[i].description = Drupal.t(collectors[i].description);
            }

            // Add default color if one not provided
            if (typeof collectors[i].color == 'undefined' || !collectors[i].color) {
              collectors[i].color = '7F7F7F';
            }

            // Generate markup for this collector/button
            var button_style = ' style="background-color: #' + collectors[i].color + ';"',
              button_title = '',
              button_target = '',
              button_href = '#';

            // Generate the title tag, using the description if provided
            if (collectors[i].description) {
              button_title = ' title="' + collectors[i].description.replace('"', "'") + '"';
            }

            // If a link is provided instead of a script, set the target to _blank to open a new tab by default
            if (collectors[i].link) {
              button_href = collectors[i].link;
              button_target = ' target="_blank"';
            }

            // Join all the markup
            if (typeof button_id == 'undefined'){
              var button_id = 'chat';
            }
            collectors_markup +=
              '<a href="' + button_href + '" id="' + button_id + '" class="jira_widget_button"' +
                button_style + button_title + button_target + '>' +
                collectors[i].name +
                '</a>';
          }

          // Determine styles for location
          var position_styles = 'bottom: 5px;' +
              'right: 5px;';
          switch (position) {
            case 'bottom_left':
              position_styles = 'bottom: 5px;' +
                'left: 5px;';
          }

          // Established default styling for the button and modal overlay
          var
            markup_id = 'jira_widget',
            options_id = markup_id + '_options',
            widget_hide_id = markup_id + '_hide',
            support_title = 'Support',
            visible =
                '-moz-opacity: 1;' +
                '-khtml-opacity: 1;' +
                'opacity: 1;',
            invisible =
                '-moz-opacity: 0;' +
                '-khtml-opacity: 0;' +
                'opacity: 0;',
            transition_fast =
              '-webkit-transition: all 200ms ease-in-out;' +
                '-moz-transition: all 200ms ease-in-out;' +
                '-ms-transition: all 200ms ease-in-out;' +
                '-o-transition: all 200ms ease-in-out;' +
                'transition: all 200ms ease-in-out;',
            transition_slow =
              '-webkit-transition: background-color 2000ms ease-in-out;' +
                '-moz-transition: background-color 2000ms ease-in-out;' +
                '-ms-transition: background-color 2000ms ease-in-out;' +
                '-o-transition: background-color 2000ms ease-in-out;' +
                'transition: background-color 2000ms ease-in-out;',
            styles =
              '#' + markup_id +
                '{' +
                'max-width: 78px;' +
                'background-color: #C90606;' +
                'border: 0;' +
                'border-radius: 3px;' +
                'box-shadow: rgba(255,255,255,0.1) 0 1px 0 0 inset,rgba(0,0,0,0.2) 0 1px 1px 0;' +
                'box-sizing: border-box;' +
                'color: #fff;' +
                'display: block;' +
                'font-family: Arial, sans-serif;' +
                'font-size: 14px;' +
                'font-variant: normal;' +
                'font-weight: bold;' +
                'min-height: 30px;' +
                'line-height: 22px;' +
                'padding: 4px 10px;' +
                'position: fixed !important;' +
                position_styles +
                'text-shadow: 0 1px 0 rgba(0,0,0,0.3);' +
                'vertical-align: baseline;' +
                'white-space: nowrap;' +
                '-moz-box-sizing: border-box;' +
                'z-index: 999999 !important;' + // One layer below the overlay of the Jira collector
                'overflow: hidden;' +
                invisible +
                transition_fast +
                '}' +
                '#' + markup_id + '.visible' +
                '{' +
                visible +
                transition_fast +
                '}' +
                '#' + markup_id + '.subtle' +
                '{' +
                'background-color: #3C3C3C;' +
                'background-color: rgba(60, 60, 60, 0.5);' +
                transition_slow +
                '}' +
                '#' + markup_id + '.subtle:hover ' +
                '{' +
                'background-color: rgba(60, 60, 60, 1);' +
                transition_fast +
                '}' +
                '#' + markup_id + ' .jira_widget_button' +
                '{' +
                'position: relative;' +
                'top: 0px;' +
                'left: 0px;' +
                'display: block !important;' +
                'margin-top: 9px;' +
                'margin-right: 4px;' +
                'margin-bottom: 10px;' +
                'margin-left: 4px;' +
                'border-radius: 3px;' +
                'text-decoration: none !important;' +
                'cursor: pointer !important;' +
                'color: #fff !important;' +
                'font-family: Arial, sans-serif !important;' +
                'font-size: 14px !important;' +
                'font-variant: normal !important;' +
                'font-weight: bold !important;' +
                'line-height: 22px !important;' +
                'padding: 4px 10px !important;' +
                'box-shadow: rgba(255,255,255,0.1) 0 1px 0 0 inset,rgba(0,0,0,0.2) 0 1px 1px 0;' +
                'box-sizing: border-box;' +
                'text-shadow: 1px 1px 0 rgba(0,0,0,0.5);' +
                'vertical-align: baseline !important;' +
                'white-space: nowrap !important;' +
                'overflow: hidden;' +
                '}' +
                '#' + markup_id + ' .jira_widget_button:hover' +
                '{' +
                'background-color: #fff !important;' +
                'color: #000 !important;' +
                'text-shadow: 1px 1px 0 rgba(0,0,0,0);' +
                '}' +
                '#' + options_id +
                '{' +
                'width: auto;' +
                'height: auto;' +
                'max-width: 0px;' +
                'max-height: 0px;' +
                'overflow: hidden;' +
                invisible +
                transition_fast +
                '}' +
                '#' + widget_hide_id +
                '{' +
                'float: right;' +
                'color: #999;' +
                'max-width: 0px;' +
                'max-height: 0px;' +
                'overflow: hidden;' +
                invisible +
                transition_fast +
                '}' +
                '#' + markup_id + ':hover' +
                '{' +
                'max-width: 195px;' +
                transition_slow +
                '}' +
                '#' + markup_id + ':hover #' + options_id + ',' +
                '#' + markup_id + ':hover #' + widget_hide_id +
                '{' +
                'max-width: 200px;' +
                'max-height: 300px;' +
                visible +
                transition_fast +
                '}'
            ,
            css = '<style type="text/css">' + styles + '</style>',
            all_markup =
              '<div id="' + markup_id + '">' +
                '<span class="support_title">' +
                  support_title +
                  // Give them the option to hide the widget to "log out" till they log back into the CMS
                  // This will only be needed in production
                  (admin_found || !is_production ? '' : ' &nbsp;<a href="#" id="' + widget_hide_id + '">X</a>') +
                '</span>' +
                '<div id="' + options_id + '">' +
                  collectors_markup +
                '</div>' +
              '</div>';

          // Add the collector styles and widget markup to the page
          $('head').append(css);
          $('body').append(all_markup)
            .find('#' + markup_id)
            .each(function () {
              var t = $(this);
              setTimeout(function () {
                t.addClass('visible');
              }, 200);
              setTimeout(function () {
                t.addClass('subtle');
              }, 1000);
            })
            .find('#jira_widget_hide')
            .click(function(){
              // Temporarally hide the markup and don't save the cookie
              $('#' + markup_id).fadeOut('slow');
              $.cookie('jira_widget_shown', 'false');
            });

          // Establish the Jira button hooks
          window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, jira_hooks);

          // Embed the Jira javascripts
          for (var k = 0; k < collectors.length; k++) {
            if (collectors[k].script) {
              $.ajax({
                url: collectors[k].script,
                type: 'get',
                cache: true,
                dataType: 'script'
              });
            }
          }
        }
      }
    });
  })(jQuery);
}
